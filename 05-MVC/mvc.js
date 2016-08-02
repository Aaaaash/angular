var app=angular.module("AngularMvc",[]);
app.controller("CommonController",['$scope',
    function CommonController($scope){
        $scope.commonFn=function(){
            alert('这是通用功能！');
        }
    }
]);
app.controller("Controller1",['$scope',
    function Controller1($scope){
        $scope.greeting={
            text:'Hello1'
        }
        $scope.test1=function(){
            alert('test1')
        };
    }
]);
app.controller("Controller2",['$scope',
    function Controller2($scope){
        $scope.greeting={
            text:'Hello2'
        }
        $scope.test2=function(){
            alert('test2')
        };
    }
]);
app.directive('keke',function(){
    return {
        restrict:'E',
        template:'<a href="http://www.bilibili.com">哔哩哔哩，干杯[]~(￣▽￣)~*</a>',
        reolace:true
    }
});


app.controller("GreetCtrl",['$scope','$rootScope',
    function GreetCtrl($scope,$rootScope){
        $scope.name="World";
        $rootScope.department='Angular';
    }
]);
app.controller("ListCtrl",['$scope',
    function ListCtrl($scope){
        $scope.names=["xiuxiu","baobao",'mitao'];
    }
]);
/*
Controller使用过程中需要注意的地方
1.不要试图服用Controller，一个控制器一般只负责一小块视图
2.不要再Controller中操作DOM，这不是控制器的职责
3.不要再Controller里面做数据格式化，ng有很好的表单控件
4.不要再Controller里面做数据过滤操作，ng有$filter服务
5.一般来说，Controller是不会互相调用的，控制器之间的交互会通过事件进行
*/
