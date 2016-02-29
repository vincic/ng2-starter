import { bootstrap } from 'angular2/platform/browser';

import { App } from './app/app';

document.addEventListener('DOMContentLoaded', function main() {

    bootstrap(App)
        .catch(err => console.error(err));
})
