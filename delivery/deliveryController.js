app.controller('deliveryController', ['$scope', function ($scope) {
    $scope.shares;
    $scope.costPerShare;
    $scope.sellPerShare;
    $scope.brokeragePercentage;
    $scope.sebiCharges;
    $scope.profit=true;


    var convertPercenttoNumber = function (percent) {
        return percent * 0.01;
    };

    $scope.$watchGroup(['shares', 'costPerShare', 'sellPerShare', 'brokeragePercentage', 'exchangeRate'], function () {
        $scope.costPrice = $scope.shares * $scope.costPerShare;
        $scope.sellingPrice = $scope.shares * $scope.sellPerShare;
        $scope.turnover = $scope.costPrice + $scope.sellingPrice;
        $scope.brokerage = convertPercenttoNumber($scope.brokeragePercentage) * $scope.costPrice + convertPercenttoNumber($scope.brokeragePercentage) * $scope.sellingPrice;        
        $scope.stt = convertPercenttoNumber(0.025) * $scope.sellingPrice;
        $scope.stampDuty = convertPercenttoNumber(0.002) * $scope.turnover;
        $scope.transactionCharges = convertPercenttoNumber($scope.exchangeRate) * $scope.turnover;
        $scope.serviceTax = convertPercenttoNumber(15) * ($scope.brokerage + $scope.transactionCharges);
        $scope.profitOrLoss = $scope.sellingPrice - ($scope.costPrice + $scope.brokerage + $scope.serviceTax + $scope.stt + $scope.stampDuty + $scope.transactionCharges);
        $scope.sebiCharges = 1.68 + ($scope.turnover - $scope.turnover);
        $scope.profit = ($scope.profitOrLoss >= 0 || isNaN($scope.profitOrLoss)) ? true : false;
    });
}]);
