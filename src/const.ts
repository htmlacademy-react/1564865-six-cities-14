export const Setting = {
  ErrorsCount: 10
};

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login-page',
  Root = '/',
  Offer = '/offer-page'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CityMap: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 150;
