import React, { useContext } from "react";
// import { LocaleContext } from "../App";
// import { LOCALE_STRINGS } from "../locales/constants";
import { strings } from "../locales/localisation";

function LoginForm() {
  console.log("strings", strings);
  const word = {
    ta: "நீங்கள் இந்தப் பக்கத்தை தமிழ் மொழியில் பார்க்கிறீர்கள்",
    te: "మీరు ఈ పేజీని తెలుగు భాషలో చూస్తున్నారు",
    en: "You Are Viewing This Page in English Langage",
  };
  return (
    <div className="form-wrapper">
      {strings.LoginForm}
      <p>{strings.name}</p>
      <p>{strings.age}</p>
      <p>
        {strings.formatString(strings.question, strings.bread, strings.butter)}
      </p>
      <p>
        {strings.formatString(
          strings.onlyForMembers,
          <a href="http://login.com">{strings.login}</a>
        )}
      </p>
      <p>{strings.formatString(strings.iAmText, <b>{strings.bold}</b>)}</p>

      <p>
        {strings.formatString(strings.currentDate, {
          month: strings.january,
          day: 12,
          year: 2018,
        })}
      </p>
      <p>{word[`${strings.getLanguage()}`]}</p>
    </div>
  );
}

export default LoginForm;
