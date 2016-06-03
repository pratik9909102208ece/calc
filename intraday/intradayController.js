app.controller('intradayController', ['$scope', function ($scope) {    
    $scope.shares;
    $scope.costPerShare;
    $scope.sellPerShare;
    $scope.brokeragePercentage;
    $scope.sebiCharges;
    $scope.profit= true;
    $scope.intra= true;
    $scope.sttPercent = 0.025;
    var costPrice;
    var sellingPrice;


    var convertPercenttoNumber = function (percent) {
        return percent * 0.01;
    };
    
    $scope.setIntraday = function(){
        $scope.intra= true;
        $scope.sttPercent = 0.025;
    }
    
    $scope.setDelivery= function(){
        $scope.intra= false;
        $scope.sttPercent = 0.1;
    }

    $scope.$watchGroup(['shares', 'costPerShare', 'sellPerShare', 'brokeragePercentage', 'exchangeRate','intra'], function () {
        costPrice = $scope.shares * $scope.costPerShare;
        sellingPrice = $scope.shares * $scope.sellPerShare;
        $scope.turnover = costPrice + sellingPrice;
        $scope.brokerage = convertPercenttoNumber($scope.brokeragePercentage) * costPrice + convertPercenttoNumber($scope.brokeragePercentage) * sellingPrice;
        if ($scope.intra){
            $scope.stt = convertPercenttoNumber($scope.sttPercent) * sellingPrice;    
        }        
        else {
            $scope.stt = convertPercenttoNumber($scope.sttPercent) * $scope.turnover;    
        }                        
        $scope.stampDuty = convertPercenttoNumber(0.002) * $scope.turnover;
        $scope.transactionCharges = convertPercenttoNumber($scope.exchangeRate) * $scope.turnover;
        $scope.serviceTax = convertPercenttoNumber(15) * ($scope.brokerage + $scope.transactionCharges);    
        $scope.profitOrLoss = sellingPrice - (costPrice + $scope.brokerage + $scope.serviceTax + $scope.stt + $scope.stampDuty + $scope.transactionCharges);
        $scope.sebiCharges = 1.68 + ($scope.turnover - $scope.turnover);
        $scope.profit = ($scope.profitOrLoss >= 0 || isNaN($scope.profitOrLoss)) ? true : false;
    });    
    
    $scope.states = {
        AndhraPradesh : 0.005,
        Karnataka : 0.01,
        Kerala : 0.002
    }
    
}]);
