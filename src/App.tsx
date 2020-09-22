import React from "react";

import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { Provider } from "react-redux";
import {
  Store,
  StoreEnhancer,
  applyMiddleware,
  compose,
  createStore,
} from "redux";

import LanguageSelector from "./components/LanguageSelector";
import LanguageDetails from "./components/LanguageDetails";
import reducers from "./reducers";
import sagas from "./sagas";

import "./static/scss/app.scss";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

/** @desc saga middleware */
const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
/** @desc redux middleware composer */
const composeEnhancers: <Func>(a: Func) => Func =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/** @desc redux middleware composer */
const store: Store = createStore(
  reducers,
  composeEnhancers<StoreEnhancer>(
    applyMiddleware<StoreEnhancer>(sagaMiddleware)
  )
);

sagaMiddleware.run(sagas);

export default function App(): React.ReactElement<{}> {
  return (
    <Provider store={store}>
      <LanguageSelector />
      <LanguageDetails />
    </Provider>
  );
}
