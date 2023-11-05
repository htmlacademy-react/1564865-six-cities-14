import PlaceCard from '../../components/place-card/place-card';

import { TOfferPreview } from '../../types/offer-preview';

type TOfferListProps = {
  offers: TOfferPreview[];
}

function OfferList({ offers }: TOfferListProps) {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </>
  );
}

export default OfferList;
