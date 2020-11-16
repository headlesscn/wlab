import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import IconLanguage from "../images/language.svg"
import IconCaretDown from "../images/caret_down.svg"

const languageName = {
  en: "English",
  ru: "русский",
  zh: "中文",
}

const Language = () => {
  const openMenu = () => {
    var switchArea = document.getElementById("language-switch");
    switchArea.classList.toggle('is-active');
  }
  const handleClick = (language) => {
    var switchArea = document.getElementById("language-switch");
    switchArea.classList.remove("is-active");

    changeLocale(language);
  }
  return (
    <div>
      <div className="dropdown is-right" id="language-switch">
        <div className="dropdown-trigger">
          <button className="button is-black" aria-haspopup="true" aria-controls="dropdown-menu" id="language-switch-btn" onClick={() => openMenu()}>
            <img src={IconLanguage} alt="" className="mr-2" />
            <span className="mr-2">
              <IntlContextConsumer>{({ language: currentLanguage }) => (
                <span>{languageName[currentLanguage]}</span>
              )}</IntlContextConsumer>
            </span>
            <img src={IconCaretDown} alt="" />
          </button>
        </div>
        <div className="dropdown-menu" id="language-switch-menu" role="menu">
          <div className="dropdown-content">
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) =>
                languages.map(language => (
                  <a
                    key={language}
                    onClick={() => handleClick(language)}
                    className={currentLocale === language ? `dropdown-item is-active` : `dropdown-item`}
                  >
                    {languageName[language]}
                  </a>
                ))
              }
            </IntlContextConsumer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Language