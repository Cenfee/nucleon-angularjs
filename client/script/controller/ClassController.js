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
    }


    var coursePackageGettedSuccessListener = $rootScope.$on("coursePackageGettedSuccess", coursePackageGettedSuccessHandler);

    function coursePackageGettedSuccessHandler(event, data)
    {
        $scope.userClasses[classIndex].appWeekList = [];
        $.extend(true, $scope.userClasses[classIndex].appWeekList, data.appWeekList);
    }



    updateCoursePackage(0);



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