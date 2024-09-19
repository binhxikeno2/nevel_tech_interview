import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

import { Typography } from '@/components';
import { InsIcon, TechLogo, TwitterIcon, YoutubeIcon } from '@/components/icon';
import { useTranslate } from '@/hooks';
import style from '@/styles/layout/top-page/footer.module.scss';

import { CollapseCompany } from './collapseCompany';

export const Footer = () => {
  const { t } = useTranslate('common');
  const social = useMemo(
    () => [
      {
        icon: <TwitterIcon />,
        link: '',
      },
      {
        icon: <YoutubeIcon />,
        link: '',
      },
      {
        icon: <InsIcon />,
        link: '',
      },
    ],
    []
  );

  const company = useMemo(
    () => [
      {
        title: t('footer.webMap'),
        tags: ['Home', 'Games', 'News', 'Math', 'Company', 'Events', 'Partners'],
      },
      {
        title: t('footer.aboutUs'),
        tags: ['Licensing', 'Certification', 'Responsible Gaming', 'Exhibitions', 'Copyright Protection', 'Privacy Policy'],
      },
      {
        title: t('footer.event'),
        tags: ['PG ICE 2017', 'PG ICE 2018', 'PG ICE 2019', 'About ICE'],
      },
      {
        title: t('footer.partners'),
        tags: ['Relax Gaming', 'Leander Games'],
      },
    ],
    []
  );

  return (
    <div className={style['footer_top_page']}>
      <div className={style['footer_top_page__wrapper']}>
        <div className={style['footer_top_page__inner']}>
          <div>
            <div className="text-gray-4 sm:hidden">
              <TechLogo width={52} height={31} />
            </div>
            <Typography size="caption" className="whitespace-pre-line sm:whitespace-normal mt-[14px] text-black-1">
              {t('footer.address')}
            </Typography>
            <Typography size="caption" className="leading-[14px] text-black-1 hidden sm:block sm:mt-5">
              {t('footer.copyRight')}
            </Typography>
            <div className={style['footer_top_page__social']}>
              {social?.map((item, index) => (
                <Link key={index} href={item?.link}>
                  <div className={style['footer_top_page__social--item']}>{item?.icon}</div>
                </Link>
              ))}
            </div>
            <div />
          </div>
          <div className={style['footer_top_page__company']}>
            {company?.map((item, index) => (
              <div key={index} className={style['footer_top_page__company--item']}>
                <CollapseCompany
                  row={
                    <Typography size="body" className="font-semibold text-black uppercase sm:text-[13px] sm:leading-[14px]">
                      {item?.title}
                    </Typography>
                  }
                >
                  <div className={style['footer_top_page__company--tags']}>
                    {item?.tags?.map((tag, indexTag) => (
                      <Typography
                        className={clsx('leading-3 text-black', style['footer_top_page__company--tags--item'])}
                        size="caption"
                        key={`${index}-${indexTag}`}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </div>
                </CollapseCompany>
              </div>
            ))}
          </div>
        </div>
        <div className={clsx(style['footer_top_page__copyright'], 'sm:hidden')}>
          <Typography size="caption" className="leading-[14px] text-black-1">
            {t('footer.copyRight')}
          </Typography>
        </div>
      </div>
    </div>
  );
};
