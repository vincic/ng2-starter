import { Component } from 'angular2/core';
import { Control } from 'angular2/common';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WebsocketService } from './websocket-service';

@Component({
    selector: 'ws-message',
    providers: [ WebsocketService ],
    template: require('../message/message.html')
})

export class WsMessage {

    data: any;
    message = new Control();
    values: any;

    constructor(private wsService: WebsocketService) {

        this.wsService.wsdata.subscribe( (values) => {
            this.values = values;
        });

        this.data = this.message.valueChanges
            .debounceTime(500)
            .map(msg => this.wsService.send(msg));

    }

    ngOnInit() {
        this.wsService.connect();

    }
}
