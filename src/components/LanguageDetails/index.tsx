import React from "react";

import { useSelector } from "react-redux";

import {
  AppState,
  LanguageDetailsType,
  LanguageDetailsItemType,
} from "../../types";

import "../../static/scss/components/LanguageDetails.scss";

export default function LanguageDetails(): React.ReactElement<{}> {
  const details: LanguageDetailsType | null = useSelector(
    (state: AppState) => state.languageDetails
  );

  return (
    <div className="language-details">
      {!details && <span>No details found</span>}
      {details &&
        details.map(
          ({ id, name, url, description }: LanguageDetailsItemType) => (
            <div key={id} className="language-details-item">
              <div>
                <b>ID:</b> <a href={url}>{id}</a>
              </div>
              <div>
                <b>name:</b> {name}
              </div>
              <div>
                <b>description:</b> {description}
              </div>
            </div>
          )
        )}
    </div>
  );
}
