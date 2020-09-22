import { AnyAction, Reducer } from "redux";

import { LanguageDetailsType } from "../types";

export const languageDetailsReducer: Reducer<
  LanguageDetailsType | null,
  AnyAction
> = (state = null, action) => {
  switch (action.type) {
    case "LANGUAGE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
