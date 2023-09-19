import { LocaleValueEnum } from '@/constants/enums';

export interface IHeader {
  lng: LocaleValueEnum;
}

export interface IHeaderBase extends IHeader {
  translationPath: string;
  lng: LocaleValueEnum;
}
