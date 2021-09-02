import { createSelector } from 'reselect';

export const getCountries = createSelector(
  /**
  * Create selector such as:
  */
  countries => countries,
  countries => countries
    .map(country => ({
      ...country,
      value: country.name,
    })),
);

export const blank = {};
