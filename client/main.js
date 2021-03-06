import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-component';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import eventosList from '../imports/components/eventosList/eventosList';
import '../imports/api/eventos.js';
import 'angular-material/angular-material.css';
//import '../imports/startup/accounts-config.js';
 //,'accounts.ui'
angular.module('meteorapp', [
  angularMeteor,ngMaterial,uiRouter,
  eventosList.name
]);

/*
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
