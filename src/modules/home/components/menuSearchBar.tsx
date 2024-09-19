import { FilterOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useMemo } from 'react';

import { Input, Typography } from '@/components';
import { AllIcon, HomeIcon, SearchIcon, TimeLineIcon } from '@/components/icon';
import { endPoint, useMediaQuery, useTranslate } from '@/hooks';
import style from '@/styles/pages/home/menu-search-bar.module.scss';
import { PropsWithClassName } from '@/types/className';

export const MenuSearchBar = ({ className }: PropsWithClassName) => {
  const { t } = useTranslate('home');
  const isMobile = useMediaQuery(endPoint.isMobile);

  const menu = useMemo(
    () => [
      {
        icon: <HomeIcon />,
        label: isMobile ? t('menuSp.home') : t('menu.home'),
      },
      {
        icon: <TimeLineIcon />,
        label: isMobile ? t('menuSp.timeLine') : t('menu.timeLine'),
      },
      {
        icon: <AllIcon />,
        label: isMobile ? t('menuSp.allGame') : t('menu.allGame'),
      },
    ],
    [isMobile]
  );

  return (
    <div className={clsx(style['menu_search_bar'], className)}>
      <div className={clsx(style['menu_search_bar__search'], 'sm:hidden')}>
        <Input size="small" className={style['menu_search_bar__search--input']} prefix={<SearchIcon />} placeholder={t('placeholder.search')} />
      </div>
      <div className={style['menu_search_bar__menu']}>
        {menu?.map((item, index) => (
          <div key={index} className={style['menu_search_bar__menu--item']}>
            {item?.icon}
            <Typography className={style['menu_search_bar__menu--title']} size="normal">
              {item?.label}
            </Typography>
          </div>
        ))}
        {isMobile && (
          <>
            <div className={style['menu_search_bar__menu--item']}>
              <SearchIcon />
              <Typography className={style['menu_search_bar__menu--title']} size="normal">
                {t('menu.search')}
              </Typography>
            </div>
            <div className={clsx(style['menu_search_bar__menu--item'], 'border-l border-solid border-gray-5')}>
              <FilterOutlined />
              <Typography className={style['menu_search_bar__menu--title']} size="normal">
                {t('menu.filter')}
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
