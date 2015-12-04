// JavaScript Document
app.controller("LoginController", function($rootScope, $scope, $location, UserModel, ClassModel)
{
    $scope.phoneText = "13189612322";
    $scope.pwText = "e10adc3949ba59abbe56e057f20f883e";



    $scope.login = function() {

        UserModel.login( $scope.phoneText, $scope.pwText);

    }

    var loginSuccessListener = $rootScope.$on("loginSuccess", loginSuccessHandler);

    function loginSuccessHandler(event,data)
    {
        loginSuccessListener();

        $location.path("/class");
    }

});