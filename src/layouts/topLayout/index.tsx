import { ArrowRightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import Slider from 'react-slick';

import { Button, Typography } from '@/components';
import { endPoint, useMediaQuery, useTranslate } from '@/hooks';
import style from '@/styles/layout/top-page/index.module.scss';

import { Footer } from './footer';
import { Header } from './header';

export const TopPageLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery(endPoint.isMobile);
  const { t } = useTranslate('common');

  const settingSlick = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
  };

  const dataSlider = [
    {
      url: !isMobile ? '/home/banner1.png' : '/home/banner-sp-header.png',
      title: 'Chicky Run',
      link: '',
    },
    {
      url: !isMobile ? '/home/banner1.png' : '/home/banner-sp-header.png',
      title: 'Chicky Run',
      link: '',
    },
  ];

  return (
    <div className={style['top_page_layout']}>
      <div className={style['top_page_layout__wrapper']}>
        <Header className="fixed" />
        <div className="w-full overflow-hidden">
          <Slider {...settingSlick} className={style['top_page_layout__slider']}>
            {dataSlider?.map((item, index) => (
              <div key={index} className="relative w-full h-[576px] sm:h-[420px]">
                <Image src={item?.url} alt="" layout="fill" />
                <div className={clsx(style['top_page_layout__slider--sp'], 'hidden sm:block')}>
                  <Typography className={style['top_page_layout__slider--title']}>{item?.title}</Typography>
                  <Button type="text" icon={<ArrowRightOutlined />} iconPosition="end" className={style['top_page_layout__slider--view_detail']}>
                    {t('banner.viewDetail')}
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};
