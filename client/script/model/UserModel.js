
/**
 * Created by Administrator on 2015/11/26.
 */

app.service("UserModel", function($rootScope, $http)
{

    var self = this;

    var id = "";
    var phone = "";
    var wxId = "";
    var name = "";
    var desc = "";
    var sex = 0;
    var head = "";
    var drCount = 0;
    var worksCount = 0;
    var apCommentCount = 0;

    this.login = function(acount, password)
    {

        $http(
            {
                url:'http://www.jiaxx.cn/bobi/pcCourse/App/login/',
                method:'GET',
                params:
                {
                    account:acount,
                    password:password
                }

            }).success(function(data,header,config,status)
            {
                id = data.userId;

                $.cookie('userId', id, { expires: 7 });

                $rootScope.$broadcast("loginSuccess");

            }).error(function(data,header,config,status)
            {
                $rootScope.$broadcast("loginFailed");
            });
    }

    this.getUserId = function()
    {
        var userId = $.cookie('userId');
        if(!userId)
        {
            window.location.href = "#/login";
            return;
        }

        return userId;
    }

    this.getUserInfo = function()
    {
        var userId = self.getUserId();
        $http(
            {
                url:'http://www.jiaxx.cn/bobi/pcCourse/App/getUser/',
                method:'GET',
                params:
                {
                    account:userId
                }

            }).success(function(data,header,config,status)
            {
                phone = data.phone;
                wxId = data.wxId;
                name = data.name;
                desc = data.desc;
                sex = data.sex;
                head = data.head;
                drCount = data.drCount;
                worksCount = data.worksCount;
                apCommentCount = data.apCommentCount;

                $rootScope.$broadcast("getUserInfoSuccess");

            }).error(function(data,header,config,status)
            {
                $rootScope.$broadcast("getUserInfoFailed");
            });
    }

});

