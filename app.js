var app = angular.module('tax',['ui.router','ui.bootstrap']);

app.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home',{
        url: '/home',
        templateUrl: '/intraday/intraday.html',
        controller: 'intradayController'        
    });

});