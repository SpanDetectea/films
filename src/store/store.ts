import { configureStore } from "@reduxjs/toolkit";
import aboutFilmReducer from "./aboutFilmReducer";
import authReducer from "./authReducer";
import filmsMainReducer from "./filmsMainReducer";
import headerReducer from "./headerReducer";
import mainReducer from "./mainReducer";

const store = configureStore({
    reducer: {
        main: mainReducer,
        aboutFilm: aboutFilmReducer,
        header: headerReducer,
        filmsMain: filmsMainReducer,
        auth: authReducer
    }
});
// window.store = store;
// let store = createStore(reducers,
//     composeWithDevTools(
//         applyMiddleware(thunk),
//     )
// );

export default store;

export type RootState = ReturnType<typeof store.getState>;
