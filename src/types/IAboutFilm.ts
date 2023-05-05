import { IFilm } from "./IFilm"

export interface IGetSimilarFilms {
    items: IFilm[],
    total: number
}
export interface IFact {
    spoiler: boolean,
    text: string,
    type: string
}
export interface IGetFacts {
    items: IFact[],
    total: number
}