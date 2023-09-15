import {
  CalendarDaysIcon,
  CheckSquareIcon,
  ChevronDownCircleIcon,
  ClockIcon,
  HeadingIcon,
  ImageIcon,
  ListTodoIcon,
  PaperclipIcon,
  PencilLineIcon,
  TextIcon,
  ToggleRightIcon,
  TypeIcon,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

import {
  ListSearchSvg,
  ListSvg,
  NumberSvg,
  TextEditStyleSvg,
} from '../../assets/icons/Svgs';
import { ScrollArea } from '../ui/ScrollArea';
import SearchInput from '../shared/SearchInput';
import { Button } from '../ui/Button';

const elementGroups = [
  {
    title: 'Layout Elements',
    elements: [
      {
        text: 'Heading',
        Icon: HeadingIcon,
      },
      {
        text: 'Description',
        Icon: PencilLineIcon,
      },
    ],
  },
  {
    title: 'Text Elements',
    elements: [
      {
        text: 'Single Line',
        Icon: TypeIcon,
      },
      {
        text: 'Number',
        Icon: NumberSvg,
      },
      {
        text: 'Multi-line',
        Icon: TextIcon,
      },
      {
        text: 'Rich Text',
        Icon: TextEditStyleSvg,
      },
    ],
  },
  {
    title: 'Multi Elements',
    elements: [
      {
        text: 'Checklist',
        Icon: ListTodoIcon,
      },
      {
        text: 'Multi-choice',
        Icon: ListSvg,
      },
      {
        text: 'Dropdown',
        Icon: ChevronDownCircleIcon,
      },
      {
        text: 'Combobox',
        Icon: ListSearchSvg,
      },
      {
        text: 'Checkbox',
        Icon: CheckSquareIcon,
      },
      {
        text: 'Switch',
        Icon: ToggleRightIcon,
      },
    ],
  },
  {
    title: 'Date Elements',
    elements: [
      {
        text: 'Date',
        Icon: CalendarDaysIcon,
      },
      {
        text: 'Time',
        Icon: ClockIcon,
      },
    ],
  },
  {
    title: 'Media Elements',
    elements: [
      {
        text: 'Attachments',
        Icon: PaperclipIcon,
      },
      {
        text: 'Image',
        Icon: ImageIcon,
      },
    ],
  },
];

export default function FormElements() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const filteredElementGroups = elementGroups.map(({ elements, title }, i) => {
    const filteredElements = elements.filter(({ text }) =>
      text.toLowerCase().includes(query.toLowerCase()),
    );

    if (filteredElements.length > 0)
      return (
        <article key={i} className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {filteredElements.map(({ text, Icon }, i) => (
              <Button
                variant="secondary"
                key={i}
                className="cursor-grab gap-3 transition-all duration-200 hover:shadow"
              >
                <Icon className="h-[18px] w-[18px]" />
                <span>{text}</span>
              </Button>
            ))}
          </div>
        </article>
      );
    else return null;
  });

  return (
    <ScrollArea className="h-[calc(100vh-104px)] pr-[26px]">
      <aside className="relative w-80">
        <section className="sticky top-0 space-y-5 bg-white pb-5">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold">Form Elements</h1>
            <h2 className="text-sm text-muted-foreground">
              Drag elements to the right
            </h2>
          </div>
          <SearchInput placeholder="Search Elements" />
        </section>
        <section className="space-y-6">
          {filteredElementGroups.every(element => element === null) ? (
            <p className="text-center text-sm font-medium text-muted-foreground">
              No results found
            </p>
          ) : (
            filteredElementGroups
          )}
        </section>
      </aside>
    </ScrollArea>
  );
}
