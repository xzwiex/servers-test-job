import controller from './messages_controller'
import template from './messages_controller_template'


export default function config ($stateProvider) {
  $stateProvider
  .state('app.feed', {
    url: "/feed",
    controller,
    controllerAs : '$ctrl',
    template
  })
}

config.$inject = ['$stateProvider']