import { TUser } from './user';
import { TOfferPreview } from './offer-preview';

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description?: string;
  host: TUser;
  images: string[];
  maxAdults: number;
  id?: string;
};
