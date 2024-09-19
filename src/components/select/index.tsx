import { Select as SelectRoot, SelectProps } from 'antd';
import clsx from 'clsx';

import style from '@/styles/components/select.module.scss';

type Props = SelectProps & {
  //
};

export const Select = ({ className, ...rest }: Props) => {
  return <SelectRoot {...rest} className={clsx(style['select-app'], className)} />;
};
