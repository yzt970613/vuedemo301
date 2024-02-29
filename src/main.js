import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
};

const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const app = createApp(App);

app.use(i18n);

app.mount('#app');
