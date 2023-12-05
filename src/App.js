import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import LoginForm from "./components/LoginForm";
import { createContext, useState } from "react";
// import { REGIONS, LOCALE_STRINGS } from "./locales/constants";
import { REGIONS, strings } from "./locales/localisation";
import Select from "./components/Select";
import ta from "./locales/ta.json";

export const LocaleContext = createContext();
function App() {
  const [locale, setLocale] = useState(REGIONS.en);
  const localeOptions = Object.keys(REGIONS);
  return (
    <div className="App">
      <h3>{strings.title}</h3>
      <Select
        options={localeOptions}
        value={locale}
        onChange={(e) => {
          console.log("change of language", e);
          setLocale(e.target.value);
          // import(`./locales/${e.target.value}.json`).then((res) => {
          //   console.log("setting str", e.target.value, res);
          //   strings.setContent({
          //     [e.target.value]: res,
          //   });
          // }); //will override all languages with current passing
          const _onSetLanguage = (language) => {
            strings.setLanguage(language);
          };
          _onSetLanguage(e.target.value);
        }}
        label={"Select Language"}
      />

      <LoginForm />
    </div>
  );
}

export default App;
