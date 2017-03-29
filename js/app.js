$(".selector").flatpickr(optional_config);

angular.module('myApp', ['ui-router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: './welcome.html',
        controller: 'myController'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../login.html',
        controller: 'myController'
      })
      .state('newRoom', {
        url: '/new-room',
        templateUrl: './new-room.html',
        controller: 'myController'
      })
      .state('roomList', {
        url: '/room-list',
        templateUrl: '../room-list.html',
        controller: 'myController'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: '../calendar.html',
        controller: 'myController'
      })
      .state('booking', {
        url: '/booking',
        templateUrl: '../booking.html',
        controller: 'myController'
      })

  })
