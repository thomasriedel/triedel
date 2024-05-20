import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createI18n} from "vue-i18n";

import de from './assets/i18n/de.json';

const i18nDE = de;

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        de: i18nDE,
    }
});

const app = createApp(App)

app.use(i18n);
app.use(router);

app.mount('#app')
