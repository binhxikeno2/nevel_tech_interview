import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Slider from 'react-slick';

import { endPoint, useMediaQuery } from '@/hooks';
import style from '@/styles/pages/home/hottest-category-slider.module.scss';

export const HottestCategorySlider = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery(endPoint.isMobile);

  if (isMobile) {
    const settingSlider = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
    };

    return (
      <div className={clsx(style['hottest_category_slider'], 'w-full overflow-hidden sm:pb-10')}>
        <Slider {...settingSlider}>{children}</Slider>
      </div>
    );
  }

  return <>{children}</>;
};
