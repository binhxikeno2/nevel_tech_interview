import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Button, Typography } from '@/components';
import { PreIcon } from '@/components/icon';
import { NextIcon } from '@/components/icon/nextIcon';
import style from '@/styles/pages/home/collection-section.module.scss';
import { PropsWithClassName } from '@/types/className';

type Props = PropsWithChildren &
  PropsWithClassName & {
    title: string;
    hiddenLoadMore?: boolean;
    filter?: React.ReactNode;
  };

export const CollectionSection = ({ title, className, children, hiddenLoadMore, filter }: Props) => {
  return (
    <div className={clsx(style['collection_section'], className)}>
      <div className={style['collection_section__header']}>
        <Typography size="large" className={style['collection_section--title']}>
          {title}
        </Typography>
        {!hiddenLoadMore && (
          <>
            <div className={clsx(style['collection_section--load_more'], 'flex sm:hidden')}>
              <Button type="text">
                <PreIcon />
              </Button>
              <Button type="text">
                <NextIcon />
              </Button>
            </div>
            <div className="hidden sm:block">{filter}</div>
          </>
        )}
      </div>
      <div className={style['collection_section__main_content']}>{children}</div>
    </div>
  );
};
