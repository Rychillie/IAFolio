import { Text } from '@/components';
import { ChevronRight, Newspaper } from '@/components/icons';
import c from 'clsx';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  icon?: 'Newspaper';
  href: string;
  color?: 'purple' | 'blue' | 'green' | 'red';
};

export default function Card({ title, description, icon, href, color }: Props) {
  return (
    <Link
      href={href}
      className={c(
        'flex w-full flex-col items-start gap-3 rounded-lg border bg-white p-3 transition-opacity hover:opacity-65 dark:bg-black sm:flex-row sm:items-center',
        color === 'purple' &&
          'border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
        color === 'blue' && 'border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
        color === 'green' &&
          'border-green-200 dark:border-green-800 text-green-600 dark:text-green-400',
        color === 'red' && 'border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
      )}
    >
      {icon && (
        <div className="pt-3 sm:p-1">
          {icon === 'Newspaper' && <Newspaper className="size-8" />}
        </div>
      )}
      <div className="flex w-full flex-col">
        <p>{title}</p>
        <Text size="small" colour="secondary">
          {description}
        </Text>
      </div>
      <ChevronRight className="hidden size-6 sm:flex" />
    </Link>
  );
}
