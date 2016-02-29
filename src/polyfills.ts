import 'es6-shim'

if ('production' === process.env.ENV ) {


} else {

    require('zone.js/dist/zone-microtask');
}
