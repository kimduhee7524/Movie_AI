import { fetchTmdb } from '@/api/tmdbClient';
import {
  MovieResponse,
  GetMoviesParams,
  GetSearchMoviesParams,
  SearchMovieResponse,
  MovieDetailType,
} from '@/types/movie';
import { locales } from '@/utils/language';

export const getPopularMovies = async (
  { page = 1, language = locales.ko }: GetMoviesParams,
  options?: { next?: NextFetchRequestConfig; cache?: RequestCache }
): Promise<MovieResponse> => {
  return fetchTmdb<MovieResponse>(
    '/movie/popular',
    {
      page,
      language,
    },
    options
  );
};

export const getSearchMovies = async (
  { query, language = locales.ko, page = 1 }: GetSearchMoviesParams,
  options?: { next?: NextFetchRequestConfig; cache?: RequestCache }
): Promise<SearchMovieResponse> => {
  return fetchTmdb<SearchMovieResponse>(
    '/search/movie',
    {
      query,
      language,
      page,
    },
    options
  );
};

export const getMovieDetail = async (
  movieId: number,
  language: string = locales.ko,
  options?: { next?: NextFetchRequestConfig; cache?: RequestCache }
): Promise<MovieDetailType> => {
  return fetchTmdb<MovieDetailType>(
    `/movie/${movieId}`,
    {
      language,
    },
    options
  );
};
