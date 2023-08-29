import type { NextFunction, Request, Response } from 'express';
import catchAsyncError from '../utils/catchAsyncError';
import { changePasswordSchema } from '@form-builder/validation';
import AppError from '../utils/appError';
import User from '../models/userModel';
import { compare, hash } from 'bcrypt';

export const changePassword = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    // Validate change password fields
    const result = await changePasswordSchema.safeParseAsync(req.body);
    if (!result.success)
      return next(
        new AppError(
          'Validation failed!',
          400,
          result.error.flatten().fieldErrors,
        ),
      );
    const { oldPassword, newPassword } = result.data;

    // Get user from collection
    const foundUser = await User.findById(req.userId)
      .select('+password')
      .exec();

    // Check if posted current password is correct
    if (!foundUser || !(await compare(oldPassword, foundUser.password)))
      return next(new AppError('Your current password is incorrect', 401));

    // If correct, update password
    foundUser.password = await hash(newPassword, 12);
    foundUser.passwordChangedAt = new Date(Date.now());
    await foundUser.save();

    res.status(200).json({
      status: 'success',
      message: 'Password changed successfully',
    });
  },
);
