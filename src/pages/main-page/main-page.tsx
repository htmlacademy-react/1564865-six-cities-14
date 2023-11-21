import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import { AppRoute } from '../../const';

// import { TOfferPreview } from '../../types/offer-preview';

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

// type MainPageProps = {
//   offers: TOfferPreview[];
// }

function MainPage(): JSX.Element {

  const [activeCity, setActiveCity] = useState<string | null>(null);

  const handleMouseEnter = (city: string) => {
    setActiveCity(city);
  };
  const handleMouseLeave = () => {
    setActiveCity(null);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main Page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li className="locations__item" key={city}>
                  <Link
                    to={AppRoute.Root}
                    className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(city)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Cities />
      </main>
    </div>
  );
}

export default MainPage;

