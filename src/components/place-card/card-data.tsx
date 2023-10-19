import apartment01 from './../../../markup/img/apartment-01.jpg';
import apartment02 from './../../../markup/img/apartment-02.jpg';
import apartment03 from './../../../markup/img/apartment-03.jpg';

export type CardProps = {
  img: string;
  premiumMark?: string;
  priceValue: number;
  rating: number;
  placeCardName: string;
  placeCardType: string;
  id?: number;
}

export const cards: CardProps[] = [
  {
    img: apartment01,
    premiumMark: 'Premium',
    priceValue: 120,
    rating: 80,
    placeCardName: 'Beautiful &amp; luxurious apartment at great location',
    placeCardType: 'Apartment',
    id: 1,
  },
  {
    img: apartment02,
    priceValue: 80,
    rating: 80,
    placeCardName: 'Wood and stone place',
    placeCardType: 'Room',
    id: 2,
  },
  {
    img: apartment03,
    priceValue: 80,
    rating: 80,
    placeCardName: 'Canal View Prinsengracht',
    placeCardType: 'Apartment',
    id: 3,
  },
  {
    img: apartment02,
    premiumMark: '',
    priceValue: 80,
    rating: 80,
    placeCardName: 'Nice, cozy, warm big bed apartment',
    placeCardType: 'Apartment',
    id: 4,
  },
];
