import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from '../protected-route/protected-route';

import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import { AppRoute, AuthorizationStatus } from '../../const';

import { TOfferPreview } from '../../types/offer-preview';
import { ReviewType } from '../../types/review';

type AppPageProps = {
  offers: TOfferPreview[];
  reviews: ReviewType[];
}

function App({ offers, reviews }: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.FavoritesPage}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.LoginPage}
              >
                <FavoritesPage offers={offers} />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.LoginPage}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Root}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${AppRoute.OfferPage}/:offerId`}
            element={<OfferPage offers={offers} reviews={reviews}/>}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
