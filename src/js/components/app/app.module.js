import uiRouter from 'angular-ui-router'

import controller from './app'
import template from './app_template'
import routing from './app.config'

export default angular
    .module('app.main', [uiRouter])
    .config(routing)
    .component('appComponent', { controller, template });