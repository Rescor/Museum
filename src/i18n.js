import { initReactI18next } from "react-i18next";
import i18n from "i18next";

function setLanguage() {
  let lang = localStorage.getItem('language');

  if (!lang) {
    const userLang = window.navigator.language.substring(0, 2);
    lang = userLang;
    localStorage.setItem("language", userLang);
  }
  if (lang !== "en" && lang !== "ru" && lang !== "be") {
    lang = "en";
    localStorage.setItem("language", "en");
  }

  return lang;
}

i18n.use(initReactI18next).init({
  resources: {
    be: {
      translation: {
        "forum": "Форум",
        "museum": "Музей",
        "gaming_hub": "Гульнявы хаб",
        "radio_tower": "Радыёвышка",
        "new_post": "Новы пост",
        "blog_acp": "ACP (Блог)",
        "cloud": "Воблака",
        "channel": "Канал",
        "main": "Галоўная"
      }
    },
    ru: {
      translation: {
        "forum": "Форум",
        "museum": "Музей",
        "gaming_hub": "Игровой хаб",
        "radio_tower": "Радиовышка",
        "new_post": "Новый пост",
        "blog_acp": "ACP (Блог)",
        "cloud": "Облако",
        "channel": "Канал",
        "main": "Главная"
      }
    },
    en: {
      translation: {
        "forum": "Forum",
        "museum": "Museum",
        "gaming_hub": "Gaming Hub",
        "radio_tower": "Radio Tower",
        "new_post": "New Post",
        "blog_acp": "ACP (Blog)",
        "cloud": "Cloud",
        "channel": "Channel",
        "main": "Main"
      }
    }

  },
  lng: setLanguage(),
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
