import EmberRouter from '@ember/routing/router';
import config from 'demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function () {
    this.route('t_shirt');
    this.route('silk_sarees');
  });
  this.route('item', { path: '/item/:itemId' });
  this.route('not-found', { path: '/*path' });
});
