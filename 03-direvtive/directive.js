var myModule=angular.module("MyModule",[]);
myModule.directive("hello",function(){
    return {
        restrict:'E',
        template:'<div>Hi everyOne!</div>',
        replace:true
    }
})
