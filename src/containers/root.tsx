import { ROOT_LAYOUT_TYPE } from '@/enum/app';
import { TopPageLayout } from '@/layouts/topLayout';

type RootProps = {
  children: React.ReactNode;
  layout?: ROOT_LAYOUT_TYPE;
};

export const Root = ({ children, layout }: RootProps) => {
  switch (layout) {
    case ROOT_LAYOUT_TYPE.TOP_PAGE:
      return <TopPageLayout>{children}</TopPageLayout>;

    default:
      return children;
  }
};
