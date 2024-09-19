import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import { Button, Select, Typography } from '@/components';
import { GameIcon, MusicIcon } from '@/components/icon';
import { useTranslate } from '@/hooks';
import style from '@/styles/pages/home/index.module.scss';

import { BoxGame } from './components/boxGame';
import { CollectionSection } from './components/collectionSection';
import { HottestCategorySlider } from './components/hottestCategorySlider';
import { MenuSearchBar } from './components/menuSearchBar';
import { FILTER_HOT_GAME, FILTER_HOTTEST_CATEGORY, getOptionFilterHotGame } from './declare';

const hotGame = [
  {
    key: FILTER_HOT_GAME.RELEASE,
    banner: '/home/hot-banner-1.png',
    thumbnail: '/home/hot-game-thubnail1.png',
    title: 'Mahjong Ways',
    preview: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine game',
  },
  {
    key: FILTER_HOT_GAME.SELLER,
    banner: '/home/hot-game-2.png',
    thumbnail: '/home/hot-game-thubnail2.png',
    title: 'Wild Bandito',
    preview: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is active',
  },
];

const hottestCategory = [
  {
    key: FILTER_HOTTEST_CATEGORY.TOP,
    icon: <MusicIcon />,
    title: 'Music',
    des: 'Music makes everything better, and these games will grove to it!',
    className: 'bg-blue-1',
    image1: '/home/category-1.png',
    image2: '/home/category-2.png',
    image3: '/home/category-3.png',
    image4: '/home/category-4.png',
    image5: '/home/category-5.png',
  },
  {
    key: FILTER_HOTTEST_CATEGORY.DOWNLOAD,
    icon: <GameIcon />,
    title: 'Table Games',
    des: 'The classic table games for the gentlemen and ladies.',
    className: 'bg-green-1',
    image1: '/home/category-1.png',
    image2: '/home/category-2.png',
    image3: '/home/category-3.png',
    image4: '/home/category-4.png',
    image5: '/home/category-1-5.png',
  },
];

type TFilter = {
  hotGame?: string;
  hotCategory?: string;
};

export const HomePage: PageProps = () => {
  const { t } = useTranslate('home');
  const [filter, setFilter] = useState<TFilter>({
    hotCategory: 'release-c',
  });

  const hotGameData = useMemo(() => {
    if (!filter?.hotGame) {
      return hotGame;
    }

    return hotGame?.filter((item) => item.key === filter.hotGame);
  }, [filter?.hotGame]);

  return (
    <div className={style['home_page']}>
      <div className={style['home_page__wrapper']}>
        <MenuSearchBar className="mt-4 sm:mt-0" />
        <div className={style['home_page__main_content']}>
          <CollectionSection
            title={t('hotGame.title')}
            filter={
              <Select
                size="small"
                value={filter.hotGame}
                onChange={(e) => setFilter({ ...filter, hotGame: e })}
                options={getOptionFilterHotGame(t)}
                className={style['home_page__hot_game--filter']}
                suffixIcon={
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[10px]">{'AZ'}</span>
                    <DownOutlined className="ml-1" />
                  </div>
                }
              />
            }
          >
            <div className={style['home_page__hot_game']}>{hotGameData?.map((item, index) => <BoxGame {...item} key={index} />)}</div>
          </CollectionSection>
          <CollectionSection title={t('hottestCategory.title')} hiddenLoadMore>
            <div className={style['home_page__hottest_category']}>
              <HottestCategorySlider>
                {hottestCategory?.map((item, index) => (
                  <div key={index} className={style['home_page__hottest_category__box-content']}>
                    <div>
                      <div className={clsx(style['home_page__hottest_category--box-text'], item?.className)}>
                        {item.icon}
                        <Typography className={style['home_page__hottest_category--title']}>{item?.title}</Typography>
                        <Typography size="body" className={style['home_page__hottest_category--des']}>
                          {item?.des}
                        </Typography>
                      </div>
                      <div className="mt-5 sm:mt-4 flex gap-5 sm:gap-4 justify-between">
                        <div className="relative w-full h-[90px] sm:h-[76px]">
                          <Image src={item?.image1} alt="" layout="fill" />
                        </div>
                        <div className="relative w-full h-[90px] sm:h-[76px]">
                          <Image src={item?.image2} alt="" layout="fill" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex gap-5 sm:gap-4 justify-between">
                        <div className="relative w-full h-[90px] sm:h-[76px]">
                          <Image src={item?.image3} alt="" layout="fill" />
                        </div>
                        <div className="relative w-full h-[90px] sm:h-[76px]">
                          <Image src={item?.image4} alt="" layout="fill" />
                        </div>
                      </div>
                      <div className="rounded-[20px] overflow-hidden mt-5 sm:mt-4 relative w-full h-full">
                        <Image src={item?.image5} alt="" layout="fill" />
                      </div>
                    </div>
                  </div>
                ))}
              </HottestCategorySlider>
            </div>
            <Button
              type="outlined"
              size="large"
              icon={<PlusOutlined />}
              iconPosition="end"
              className={style['home_page__hottest_category__load_more']}
            >
              {t('hottestCategory.loadMore')}
            </Button>
          </CollectionSection>
        </div>
      </div>
    </div>
  );
};
