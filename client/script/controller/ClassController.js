// JavaScript Document
app.controller("ClassController", function($rootScope, $location, $scope, ClassModel)
{
    $scope.userClasses = null;

    var classGettedSuccessListener =  $rootScope.$on("classGettedSuccess", classGettedSuccessHandler);

    function classGettedSuccessHandler(event, data)
    {
        $scope.userClasses = [];
        $.extend(true, $scope.userClasses, data);
        $scope.userClasses[0].active = "active";

        updateCoursePackage(0);
    }


    var coursePackageGettedSuccessListener = $rootScope.$on("coursePackageGettedSuccess", coursePackageGettedSuccessHandler);

    function coursePackageGettedSuccessHandler(event, data)
    {
        $scope.userClasses[0].appWeekList = [];
        $.extend(true, $scope.userClasses[0].appWeekList, data.appWeekList);
    }



//现在只是初始化第一页，改成一直监听model变化


    updateClass();

    function updateClass()
    {
        ClassModel.getClassAsync();
    }


    function updateCoursePackage(classIndex)
    {
        if($scope.userClasses[classIndex].appWeekList)
        {
            return;
        }
        ClassModel.getCoursePackageAsync($scope.userClasses[classIndex].id);
    }



});