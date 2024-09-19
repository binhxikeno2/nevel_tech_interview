import { MenuOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useMemo, useState } from 'react';

import { Typography } from '@/components';
import { TechLogo } from '@/components/icon';
import { endPoint, useMediaQuery, useTranslate } from '@/hooks';
import style from '@/styles/layout/top-page/header.module.scss';
import { PropsWithClassName } from '@/types/className';

export const Header = ({ className }: PropsWithClassName) => {
  const { t } = useTranslate('common');
  const isMobile = useMediaQuery(endPoint.isMobile);
  const [toggleMenu, setToggleMenu] = useState<boolean>();
  const menu = useMemo(
    () => [
      {
        label: t('menu.home'),
      },
      {
        label: t('menu.games'),
      },
      {
        label: t('menu.news'),
      },
      {
        label: t('menu.match'),
      },
      {
        label: t('menu.company'),
      },
      {
        label: t('menu.events'),
      },
      {
        label: t('menu.partners'),
      },
    ],
    []
  );

  return (
    <div className={clsx(style['header_top_page'], className)}>
      <div className={style['header_top_page__inner']}>
        <div className="text-white">
          <TechLogo width={!isMobile ? 108 : 53} height={!isMobile ? 64 : 31} />
        </div>
        <ul className={clsx(style['header_top_page__nav'])}>
          {menu?.map((item, index) => (
            <li key={index}>
              <Typography className={style['header_top_page__nav__item']} size="medium">
                {item?.label}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block relative">
          <MenuOutlined onClick={() => setToggleMenu(!toggleMenu)} className="text-white" />
          <div className={clsx(style['header_top_page__menu_sp'], 'transition-all', toggleMenu ? 'left-[20%]' : 'left-full')}>
            <ul className={style['header_top_page__nav-sp']}>
              {menu?.map((item, index) => (
                <li key={index} className={style['header_top_page__nav-sp--item']} onClick={() => setToggleMenu(!toggleMenu)}>
                  <Typography className={style['header_top_page__nav-sp--title']} size="normal">
                    {item?.label}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
