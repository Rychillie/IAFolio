import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  replace?: boolean;
};

export default function CustomLink({ href, children, replace }: Props) {
  return (
    <Link href={href} className="text-blue-600 dark:text-blue-400" replace={replace}>
      {children}
    </Link>
  );
}
