import { Component } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { Home } from './home/home';
import { WikiSearch } from './wikipedia/search';
import { WsMessage } from './websocket/component';

@Component({

    selector: 'app',
    providers: [],
    directives: [ ...ROUTER_DIRECTIVES ],
    pipes: [],
    styles: [],
    template: require('./app.html')
})

@RouteConfig([
    { path: '/', component: WsMessage, name: 'Index' },
    { path: '/about', component: WikiSearch,  name: 'About' },
    { path: '/home', component: Home,  name: 'Home' },
    { path: '/**', redirectTo: ['Index'] }
])

export class App {
    title = 'ClassAppTitle';

    constructor() {

    }
}
