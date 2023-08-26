import InputField from '../components/shared/InputField';
import { Button } from '../components/ui/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/Card';

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="relative z-10 text-center">
            <hr className="absolute left-0 right-0 top-1/2 -z-10" />
            <p className="inline-block bg-white px-4 text-sm uppercase text-muted-foreground">
              Or Login With Email
            </p>
          </div>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="test@mail.com"
            className="text-slate-600"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password123@"
            className="text-slate-600"
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" size="sm" className="w-full">
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
