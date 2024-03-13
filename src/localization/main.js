import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import en from './translations/en';
import fi from './translations/fi';

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: typeof en
      },
      fi: {
        translation: typeof fi
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  }).catch(e => console.log(e));

export default i18n;
