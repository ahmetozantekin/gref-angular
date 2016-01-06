angular.module('UI', ['ngMaterial'])

     .directive('gref',[function(){
        return{
            restrict: 'EAM',
            link: function(scope, element, attrs){
               element[0].style.cursor = "pointer"; 
               
               element.bind('click', function() {
                    var googleIt = element.find('img','a','li').attr('alt');
                        if(googleIt == "undefined" || googleIt == ""){
                            window.open("undefined");
                        } else {
                             window.open("https://www.google.com.tr/?ssl#q="+googleIt);  
                        }
                });
                
            }
        }
    }])

    
 /*   
    .directive('googleIt',[function(){
        return{
            restrict: 'EAC',
            link: function(scope, element, attrs){
                scope.clickingCallback = function() {
                var googlethis = attrs.googleIt;
                window.open("https://www.google.com.tr/?ssl#q="+googlethis);  
                }
            }
        }
    }])
    
*/