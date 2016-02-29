import 'es6-shim'

require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');

if ('production' === process.env.ENV ) {

    require('zone.js/dist/zone-microtask.min');

    // RxJS
    // In production manually include the operators you use
    require('rxjs/add/operator/map');

} else {

    require('es7-reflect-metadata/src/global/browser');

    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/zone-microtask');
    require('zone.js/dist/long-stack-trace-zone');


}
