export interface LanguageDetailsItemType {
  id: number;
  name: string;
  url: string;
  description: string;
}

export type LanguageDetailsType = Array<LanguageDetailsItemType>;

export interface AppState {
  languageSelector: string | null;
  languageDetails: LanguageDetailsType | null;
}
