import { configureStore } from "@reduxjs/toolkit";
import aboutFilmReducer from "./aboutFilmReducer";
import authReducer from "./authReducer";
import filmsMainReducer from "./filmsMainReducer";
import mainReducer from "./mainReducer";
import headerReducer from "./headerReducer";

const store = configureStore({
    reducer: {
        main: mainReducer,
        aboutFilm: aboutFilmReducer,
        header: headerReducer,
        filmsMain: filmsMainReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;