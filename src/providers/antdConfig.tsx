import { ConfigProvider, ThemeConfig } from 'antd';

type AntdConfigProps = {
  children: React.ReactElement;
};

export const AntdConfig = ({ children }: AntdConfigProps) => {
  const theme: ThemeConfig = {
    components: {
      Input: {
        controlHeight: 40,
      },
      Select: {
        controlHeight: 40,
      },
      Button: {
        defaultHoverBg: 'initial',
      },
    },
  };

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
