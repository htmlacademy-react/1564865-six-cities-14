import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OfferList from '../../components/offer-list/offer-list';
import { useAppSelector } from '../../hooks';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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

                  <OfferList offers={offers}/>

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

                  <OfferList offers={offers}/>

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
