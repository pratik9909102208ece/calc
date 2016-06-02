var app = angular.module('tax',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/intra');
    
    $stateProvider
    
    .state('intra',{
        url: '/intra',
        templateUrl: '/intraday/intraday.html',
        controller: 'intradayController'        
    })
    
    .state('delivery',{
        url: '/delivery',
        templateUrl: '/delivery/delivery.html',
        controller: 'deliveryController'        
    });
    

});