import 'es6-shim'

if ('production' === process.env.ENV ) {

    require('zone.js/dist/zone-microtask.min');

} else {

    require('es7-reflect-metadata/src/global/browser');

    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/zone-microtask');
    require('zone.js/dist/long-stack-trace-zone');
}
