import LocalizedStrings from "react-localization";
import enStrings from "./en.json";
import taStrings from "./ta.json";
import teStrings from "./te.json";
export const REGIONS = { en: "en", ta: "ta", te: "te" };
export const strings = new LocalizedStrings({
  en: enStrings,
  ta: taStrings,
  te: teStrings,
});
