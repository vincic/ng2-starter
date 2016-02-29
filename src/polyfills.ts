import 'es6-shim'

if ('production' === process.env.ENV ) {


} else {

    require('es7-reflect-metadata/src/global/browser');

    require('zone.js/dist/zone-microtask');
}
