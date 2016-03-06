import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class WebsocketService {

    private dataStream: any;
    private socketUrl: string;
    private socket: WebSocket;
    public  wsdata: Observable<any>;

    constructor() {
        this.wsdata = new Observable( observer => {
            console.log('observer', observer);
            this.dataStream = observer;
        }).share();

        this.socketUrl = 'ws://localhost:8080';
    }

    connect() {
        var self = this;


        this.socket = new WebSocket(this.socketUrl, 'echo-protocol');

        this.socket.onopen = (ev: Event) => {
            console.log('Websocket opened');
        }

        this.socket.onmessage = (ev: MessageEvent) => {
            console.log(this);
            this.dataStream.next([ev.data]);
        }

        this.socket.onerror = (ev: ErrorEvent) => {
            self.dataStream.error(ev);
        }
    }

    send(message: string) {
        this.socket.send(message);
    }

    getDataStream(): Observable<any> {
        return this.data;
    }
}
