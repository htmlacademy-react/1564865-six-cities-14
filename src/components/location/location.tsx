import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import { cities } from './location-data';

function Location() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const handleMouseEnter = (city: string) => {
    setActiveCity(city);
  };
  const handleMouseLeave = () => {
    setActiveCity(null);
  };
  return (
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
  );
}

export default Location;
