import { TUser } from './user';

export type ReviewType = {
  id: number;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
};
