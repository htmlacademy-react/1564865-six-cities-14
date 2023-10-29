import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceCard from '../../components/place-card/place-card';
import { cards } from '../../components/place-card/card-data';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <Helmet>
          <title>6 cities - Favorites Page</title>
        </Helmet>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {cards.map((card) => (
                    <PlaceCard
                      key={card.id}
                      img={card.img}
                      premiumMark={card.premiumMark}
                      priceValue={card.priceValue}
                      rating={card.rating}
                      placeCardName={card.placeCardName}
                      placeCardType={card.placeCardType}
                    />
                  ))};
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {cards.map((card) => (
                    <PlaceCard
                      key={card.id}
                      img={card.img}
                      premiumMark={card.premiumMark}
                      priceValue={card.priceValue}
                      rating={card.rating}
                      placeCardName={card.placeCardName}
                      placeCardType={card.placeCardType}
                    />
                  ))};
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
