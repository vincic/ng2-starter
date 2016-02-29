import { Component } from 'angular2/core';
import { Control } from 'angular2/common';
import { JSONP_PROVIDERS } from 'angular2/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WikipediaService } from './wikipedia-service';

@Component({
    selector: 'wiki-search',
    providers: [ WikipediaService, JSONP_PROVIDERS ],
    template: require('./search.html')

})

export class WikiSearch {

    items: Observable<Array<string>>;
    term = new Control();

    constructor(private wikipediaService: WikipediaService ) {
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.wikipediaService.search(term));
    }
}
