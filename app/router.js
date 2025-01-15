import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // route and template names are the same
  this.route('scientists');
  // use programmers template on /progs route
  this.route('programmers', { path: '/progs' });
});
