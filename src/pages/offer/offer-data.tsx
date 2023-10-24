import room from '../../../markup/img/room.jpg';
import apartment01 from '../../../markup/img/apartment-01.jpg';
import apartment02 from '../../../markup/img/apartment-02.jpg';
import apartment03 from '../../../markup/img/apartment-03.jpg';
import studio01 from '../../../markup/img/studio-01.jpg';

const offerInsideItems: string[] = [
  'Wi-Fi',
  'Heating',
  'Kitchen',
  'Fridge',
  'Washing machine',
  'Coffee machine',
  'Dishwasher',
  'Towels',
  'Baby seat',
  'Cabel TV',
];

type offerGalleryProps = {
  img: string;
  alt: string;
  id?: number;
}

const offerGallery: offerGalleryProps[] = [
  {
    img: room,
    alt: 'Photo studio',
    id: 1,
  },
  {
    img: apartment01,
    alt: 'Photo studio',
    id: 2,
  },
  {
    img: apartment02,
    alt: 'Photo studio',
    id: 3,
  },
  {
    img: apartment03,
    alt: 'Photo studio',
    id: 4,
  },
  {
    img: studio01,
    alt: 'Photo studio',
    id: 5,
  },
  {
    img: apartment01,
    alt: 'Photo studio',
    id: 6,
  },
];

export {
  offerInsideItems,
  offerGallery
};
