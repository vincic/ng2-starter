import { Component } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { Home } from './home/home';

@Component({

    selector: 'app',
    providers: [],
    directives: [ ...ROUTER_DIRECTIVES ],
    pipes: [],
    styles: [],
    template: require('./app.html')
})

@RouteConfig([
    { path: '/', component: Home, name: 'Index' },
    { path: '/about', component: Home,  name: 'About' },
    { path: '/home', component: Home,  name: 'Home' },
    { path: '/**', redirectTo: ['Index'] }
])

export class App {
    title = 'ClassAppTitle';

    constructor() {

    }
}
