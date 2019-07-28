(function (angular) {
    'use strict';

    function CalculatorController($scope) {
        $scope.numArr = [];
        $scope.modifiers = ['+', '-', '*', '/'];
        $scope.firstValue = "";
        $scope.secondValue = "";
        $scope.currentModifier = "";
        var valueFlag = false;

        for (var i = 9; i >= 0; i--) {
            $scope.numArr.push(i);
        }

        function currentValueToShow(num) {
            assignValues(num);
        }

        function assignValues(num) {
            if (valueFlag) {
                $scope.secondValue += num;
            } else {
                $scope.firstValue += num;
            }
        }

        $scope.showNumber = currentValueToShow;

        function activateFlag() {
            valueFlag = true;
        }

        function setCurrentModifier(modifier) {
            activateFlag();
            $scope.currentModifier = modifier;
        }

        $scope.makeSecondValue = setCurrentModifier;

        function evalMath() {
            if ($scope.firstValue != null && $scope.secondValue != null) {
                var mathFormat = $scope.firstValue + $scope.currentModifier + $scope.secondValue;
                $scope.result = eval(mathFormat);
            }
        }

        $scope.doMath = evalMath;

        function clearScope() {
            valueFlag = false;
            $scope.firstValue = '';
            $scope.secondValue = '';
            $scope.currentModifier = '';
            $scope.result = '';
        }

        $scope.clearNumbers = clearScope;
    }

    angular.module('myApp').component('calculator', {
        templateUrl: 'calculator.html',
        controller: CalculatorController
    });
})(window.angular);