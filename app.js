var app = angular.module('tax',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home',{
        url: '/intra',
        templateUrl: '/intraday/intraday.html',
        controller: 'intradayController'        
    });

});