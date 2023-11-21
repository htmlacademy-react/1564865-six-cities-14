import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

import { offerGallery, offerInsideItems } from './offer-data';

// import { TOfferPreview } from '../../types/offer-preview';
// import { ReviewType } from '../../types/review';
import { CityMapData } from '../../const';

import useHover from '../../hooks/useHover';
import { useAppSelector } from '../../hooks';
import { reviews } from '../../mocks/reviews';

function OfferPage() {
  const activeCity = CityMapData.Amsterdam;
  const offers = useAppSelector((state) => state.offers);

  const { hoveredOfferId, handleCardHover } = useHover({ initialOfferId: null });

  return (
    <>
      <Header />
      <main className="page__main page__main--offer">
        <Helmet>
          <title>6 cities - Offer Page</title>
        </Helmet>
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">

              {offerGallery.map((image) => (
                <div className="offer__image-wrapper"
                  key={image.id}
                >
                  <img src={image.img} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerInsideItems.map((offerInsideItem) => (
                    <li
                      className="offer__inside-item"
                      key={offerInsideItem}
                    >
                      {offerInsideItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                  Angelina
                  </span>
                  <span className="offer__user-status">
                  Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>

          <Map
            block='cities'
            offers={offers}
            location={activeCity.location}
            specialOfferId={hoveredOfferId}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={offers} onCardHover={handleCardHover}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;
