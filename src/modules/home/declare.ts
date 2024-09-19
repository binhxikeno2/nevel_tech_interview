import { TranslateProps } from "@/hooks";

export enum FILTER_HOT_GAME {
  RELEASE = 'release',
  SELLER = 'seller'
}

type TOptionFilterHotGame = {
  value: FILTER_HOT_GAME,
  label: string
}

export const getOptionFilterHotGame = (t: TranslateProps): TOptionFilterHotGame[] => [
  {
    value: FILTER_HOT_GAME.RELEASE,
    label: t('hotGame.filterRelease')
  },
  {
    value: FILTER_HOT_GAME.SELLER,
    label: t('hotGame.filterSeller')
  }
];

export enum FILTER_HOTTEST_CATEGORY {
  TOP = 'top',
  DOWNLOAD = 'download'
}