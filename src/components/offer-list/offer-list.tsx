import PlaceCard from '../../components/place-card/place-card';

import { TOfferPreview } from '../../types/offer-preview';

type TOfferListProps = {
  offers: TOfferPreview[];
}

function OfferList({ offers }: TOfferListProps) {

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} block='cities' />
      ))}
    </>
  );
}

export default OfferList;
