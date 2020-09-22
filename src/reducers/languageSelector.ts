import { AnyAction, Reducer } from "redux";

export const languageSelectorReducer: Reducer<string | null, AnyAction> = (
  state = null,
  action
) => {
  switch (action.type) {
    case "SELECTED_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
};
