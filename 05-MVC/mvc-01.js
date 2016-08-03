var app=angular.module('AngularMvc',[]);
app.controller('EventController',['$scope',
    function ($scope){
        $scope.count=0;
        $scope.$on('MyEvent',function(){
            $scope.count++;
        })
    }
]);
