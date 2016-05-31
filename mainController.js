app.controller('mainController',['$scope',function($scope){
    $scope.shares;
    $scope.costPerShare;
    $scope.sellPerShare;
    $scope.brokeragePercentage;
    
    
    var convertPercenttoNumber = function (percent) {
        return percent * 0.01;
    };  
    
    $scope.$watchGroup(['shares','costPerShare','sellPerShare','brokeragePercentage'],function(){    
        $scope.costPrice = $scope.shares*$scope.costPerShare;
        $scope.sellingPrice = $scope.shares*$scope.sellPerShare;        
        $scope.turnover = $scope.costPrice + $scope.sellingPrice;    
        $scope.brokerage = convertPercenttoNumber($scope.brokeragePercentage)*$scope.turnover;
        $scope.serviceTax = 2 * convertPercenttoNumber(12.36)*$scope.brokerage;
        $scope.stt = convertPercenttoNumber(0.0025)*$scope.sellingPrice;
        $scope.stampDuty = convertPercenttoNumber(0.002)*$scope.turnover;
        $scope.regulatoryTax = convertPercenttoNumber(0.004)*$scope.turnover;    
    });
    
    
    
}]);