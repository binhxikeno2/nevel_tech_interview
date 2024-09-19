import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Typography } from '@/components';
import { endPoint, useMediaQuery, useTranslate } from '@/hooks';
import style from '@/styles/pages/home/box-game.module.scss';

type Props = {
  banner: string;
  thumbnail: string;
  title: string;
  preview: string;
  link?: string;
};

export const BoxGame = (props: Props) => {
  const { t } = useTranslate('home');
  const router = useRouter();
  const isMobile = useMediaQuery(endPoint.isMobile);
  const { banner, thumbnail, title, preview, link } = props;

  return (
    <div className={style['box_game']}>
      <div className={clsx(style['box_game--image'], 'h-[221px] sm:h-[180px]')}>
        <Image src={banner} alt={title} layout="fill" className="object-cover" />
      </div>
      <div className={style['box_game__content']}>
        <div className={style['box_game__content-info']}>
          <Image src={thumbnail} alt={title} width={isMobile ? 60 : 90} height={isMobile ? 60 : 90} />
          <div>
            <Typography className={style['box_game--title']}>{title}</Typography>
            <Typography className={style['box_game--preview']}>{preview}</Typography>
          </div>
        </div>
        <Button type="outlined" size="small" onClick={() => router.push(link || '')} className="sm:hidden">
          {t('hotGame.view')}
        </Button>
        <div className={style['box_game__point_sp']}>
          <div>
            <Typography className={style['box_game--title']}>{'MEDIUM'}</Typography>
            <Typography className={style['box_game--preview']}>{'Volatility'}</Typography>
          </div>
          <div>
            <Typography className={style['box_game--title']}>{'95.01%'}</Typography>
            <Typography className={style['box_game--preview']}>{'RTP'}</Typography>
          </div>
          <div>
            <Typography className={style['box_game--title']}>{'x5000'}</Typography>
            <Typography className={style['box_game--preview']}>{'Maximum Win'}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
