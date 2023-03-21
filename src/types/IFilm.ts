import { ICountries } from "./ICountries";
import { IGenres } from "./IGenres";

export interface IFilm {
    filmId: number,
    nameRu: string | null | undefined,
    nameEn: string | null | undefined,
    year: string,
    filmLength: string | number,
    countries: ICountries[],
    genres: IGenres[],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    ratingChange: null,
    completed?: boolean,
    coverUrl?: string,
    description?: string,
    editorAnnotation?: null,
    endYear?: null,
    has3D?: boolean,
    kinopoiskId?: number
    imdbId?: string
    nameOriginal?: string
    logoUrl?: string
    reviewsCount?: number
    ratingGoodReview?: number
    ratingGoodReviewVoteCount?: number
    ratingKinopoisk?: number
    ratingKinopoiskVoteCount?: number
    ratingImdb?: number
    ratingImdbVoteCount?: number
    ratingFilmCritics?: number
    ratingFilmCriticsVoteCount?: number
    ratingAwait?: null
    ratingAwaitCount?: number
    ratingRfCritics?: null
    ratingRfCriticsVoteCount?: number
    webUrl?: string
    slogan?: string
    shortDescription?: string
    isTicketsAvailable?: boolean
    productionStatus?: null
    type?: string
    ratingMpaa?: string
    ratingAgeLimits?: string
    startYear?: null
    serial?: boolean
    shortFilm?: boolean
    hasImax?: boolean
    lastSync?: string
}