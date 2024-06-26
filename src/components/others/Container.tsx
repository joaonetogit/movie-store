import { IContainerProps } from '@/types/components/Container';

export default function Container({ children }: IContainerProps) {
  return <div className="container">{children}</div>;
}
