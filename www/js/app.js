// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','timer'])

.run(function($ionicPlatform,$state,$rootScope,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $ionicPlatform.registerBackButtonAction(function () {
    if($state.current.name==='tab.simulate' || $state.current.name==='tab.test'){
      $rootScope.$ionicGoBack();
    }else{
      $ionicHistory.goBack();
    }
}, 100);
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/side-menu.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.home', {
    cache: false,
    url: '/home',
    views: {
      'menu': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('tab.mode', {
    cache: false,
    url: '/mode',
    views: {
      'menu': {
        templateUrl: 'templates/tab-mode.html',
        controller: 'ModeCtrl'
      }
    }
  })
  .state('tab.test', {
    cache: false,
    url: '/test',
    views: {
      'menu': {
        templateUrl: 'templates/tab-test.html',
        controller: 'TestCtrl'
      }
    }
  })
  .state('tab.simulate', {
      cache: false,
      url: '/simulate',
      views: {
        'menu': {
          templateUrl: 'templates/tab-simulate.html',
          controller: 'TestCtrl'
        }
      }
  })
  .state('tab.settings', {
      url: '/settings',
      views: {
        'menu': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
  })
  .state('tab.reviews', {
      cache: false,
      url: '/reviews',
      views: {
        'menu': {
          templateUrl: 'templates/tab-review.html',
          controller: 'ReviewCtrl'
        }
      }
  })
  .state('tab.saved', {
      cache: false,
      url: '/saved',
      views: {
        'menu': {
          templateUrl: 'templates/tab-review-question.html',
          controller: 'ReviewQuestionCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
