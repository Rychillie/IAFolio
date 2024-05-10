import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-auto flex size-full max-w-3xl flex-col p-8">{children}</div>;
}
