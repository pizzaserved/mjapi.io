import { Injectable } from '@angular/core';
import * as CookieConsent from 'vanilla-cookieconsent';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  constructor() {
    this.initializeCookieConsent();
  }

  // TODO soon (once getting enough traffic): set "disablePageInteraction: true" below, and redirect to google if rejects
  // TODO later: actually comply with their choice, no disablePageInteraction (i.e. need to have another cookie service through which we set cookies and it returns true/false for each change, and if false, then do some alternative logic)
  initializeCookieConsent() {
    // For modal's dark theme
    document.documentElement.classList.add('cc--darkmode');

    // Cookie consent: https://cookieconsent.orestbida.com/essential/getting-started.html#angular
    CookieConsent.run({
      guiOptions: {
          consentModal: {
              layout: "box",
              position: "bottom right",
              equalWeightButtons: true,
              flipButtons: false
          },
          preferencesModal: {
              layout: "box",
              position: "right",
              equalWeightButtons: true,
              flipButtons: false
          }
      },
      categories: {
          necessary: {
              enabled: true,  // this category is enabled by default
              readOnly: true  // this category cannot be disabled
          },
          analytics: {}
      },
      language: {
          default: 'en',
          autoDetect: "browser",
          translations: {
              en: {
                  consentModal: {
                      title: 'We use cookies 🍪',
                      // description: 'Mostly for auto-login',
                      // description: 'Auto-login and stuff',
                      description: ' ',
                      acceptAllBtn: 'Accept all',
                      acceptNecessaryBtn: 'Reject all',
                      // showPreferencesBtn: 'Manage Individual preferences',
                      // footer: "<a href=\"privacy.html\">Privacy</a>\n<a href=\"terms.html\">Terms</a>"
                      footer: "<a href=\"privacy.html\">Privacy</a>"
                  },
                  preferencesModal: {
                      title: 'Manage cookie preferences',
                      acceptAllBtn: 'Accept all',
                      acceptNecessaryBtn: 'Reject all',
                      // savePreferencesBtn: 'Accept current selection',
                      closeIconLabel: 'Close modal',
                      sections: [
                          {
                              title: 'Somebody said ... cookies?',
                              description: 'I want one!'
                          },
                          {
                              title: 'Strictly Necessary cookies',
                              description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
  
                              //this field will generate a toggle linked to the 'necessary' category
                              linkedCategory: 'necessary'
                          },
                          {
                              title: 'Performance and Analytics',
                              description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                              linkedCategory: 'analytics'
                          },
                          {
                              title: 'More information',
                              description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                          }
                      ]
                  }
              }
          }
      },
      // disablePageInteraction: true
    });
  }
}
