import React, { useCallback } from "react";

import { AnyAction, Dispatch } from "redux";
import { useDispatch } from "react-redux";

import "../../static/scss/components/LanguageSelector.scss";

export default function LanguageSelector(): React.ReactElement<{}> {
  const dispatch = useDispatch<Dispatch>();

  /** @desc Handles value change for dropdown */
  const handleChange = useCallback(
    (event: { target: { value: string | null } }) => {
      dispatch<AnyAction>({
        type: "LANGUAGE_CHANGE",
        payload: event.target.value,
      });
    },
    [dispatch]
  );

  return (
    <div className="language-selector">
      <label htmlFor="language">Choose a language:</label>

      <select
        name="language"
        id="language"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          Select your option
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
        <option value="Java">Java</option>
      </select>
    </div>
  );
}
