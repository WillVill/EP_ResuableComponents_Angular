angular.module('app',[])
        .service('service',function(){
            this.titleCase = function(text){
                var result = '';
                for (var i = 0; i < text.length; i++) {
                    var char = text.charAt(i);
                    if(i===0){
                        var cap = text.charAt(i).toUpperCase();
                        result+=cap; 
                    }
                    else if(char ===" "){
                        var cap = text.charAt(i+1).toUpperCase();
                        i+=1;
                        result+=" "+cap;
                    }else{
                        result+=char;
                    }
                }
                return result;
            };
            this.camelCase = function(text){
                var result = '';
                for (var i = 0; i < text.length; i++) {
                    var char = text.charAt(i);
                    if(i===0){
                        var cap = text.charAt(i).toUpperCase();
                        result+=cap; 
                    }
                    else if(char ===" "){
                        var cap = text.charAt(i+1).toUpperCase();
                        i+=1;
                        result+=cap;
                    }else{
                        result+=char;
                    }
                }
                return result;
            };
            this.dashCase = function(text){
                var result = '';
                for (var i = 0; i < text.length; i++) {
                    var char = text.charAt(i);
                    if(i===0){
                        var cap = text.charAt(i).toUpperCase();
                        result+=cap; 
                    }
                    else if(char ===" "){
                        var cap = text.charAt(i+1).toUpperCase();
                        i+=1;
                        result+="-"+cap;
                    }else{
                        result+=char;
                    }
                }
                return result;
            };
        })
        .directive('directive',function(){
            return{
                templateUrl:'directive1.html',
                scope:{
                    title: '@header'
                }
            }
        })
        .filter('name',function(){
            return function(person){
                var result = person.lastName +", "+person.firstName;
                return result;
            };
        })
        .controller('controller',['$scope','$http','service',function($scope,$http,service){
                $scope.person = {firstName:'Peter', lastName:'Smith'};
                $scope.title ="blah blah";
                $scope.titleCase = function(text){
                    return service.titleCase(text);
                };
                $scope.camelCase = function(text){
                    return service.camelCase(text);
                };
                $scope.dashCase = function(text){
                    return service.dashCase(text);
                };
        }]);