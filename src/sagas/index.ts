import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";

import { LanguageDetailsType } from "../types";

function fetchTrendingReposAPI(language: string): Promise<LanguageDetailsType> {
  return fetch(`https://api.github.com/search/repositories?q=${language}`)
    .then((res: Response) => res.json())
    .then((data: { items: any }) =>
      data.items.map((repos: any) => ({
        id: repos.id,
        name: repos.full_name,
        url: repos.html_url,
        description: repos.description,
      }))
    );
}

function* fetchTrendingRepos(action: AnyAction) {
  try {
    const data: LanguageDetailsType = yield call(
      fetchTrendingReposAPI,
      action.payload
    );
    yield put({ type: "LANGUAGE_DETAILS", payload: data });
  } catch (error) {
    console.error(error);
  }
}

function* saga() {
  yield takeLatest("LANGUAGE_CHANGE", fetchTrendingRepos);
}

export default saga;
