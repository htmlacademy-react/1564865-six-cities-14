import { createReducer } from '@reduxjs/toolkit';

import { CityMapData } from '../const';

import { ReviewType } from '../types/review';
import { TCity } from '../types/city';
import { TOfferPreview } from '../types/offer-preview';
import { TOffer } from '../types/offer';

import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

import {
  fetchOffers,
  fetchReviews,
  setActiveCity,
  dropOffer,
  fetchFavorites,
  fetchNearPlaces,
  fetchOffer
}
  from './action';

const initialState: {
    offers: TOffer[];
    nearPlaces: TOffer[];
    reviews: ReviewType[];
    offer: TOffer | null;
    favorites: TOfferPreview[];
    activeCity: TCity | undefined;
  } = {
    offers: offers,
    nearPlaces: [],
    reviews: [],
    offer: null,
    favorites: [],
    activeCity: CityMapData.Paris,
  };

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
