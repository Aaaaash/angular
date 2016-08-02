var myModule=angular.module("HelloAngular",[]);
myModule.controller("ngModule",['$scope',
    function HelloAngular($scope){
        $scope.greeting={
            text:'Hello'
        }
    }
]);
