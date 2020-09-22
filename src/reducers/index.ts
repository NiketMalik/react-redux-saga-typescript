import { combineReducers } from "redux";

import { AppState } from "../types";
import { languageSelectorReducer } from "./languageSelector";
import { languageDetailsReducer } from "./languageDetails";

export default combineReducers<AppState>({
  languageSelector: languageSelectorReducer,
  languageDetails: languageDetailsReducer,
});
