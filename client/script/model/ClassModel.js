/**
 * Created by Administrator on 2015/12/1.
 */
app.service("ClassModel", function($rootScope, $http, UserModel)
{
    var self = this;
    /**
    this.userClasses = [
        {
            "name":"\u5185\u6d4b\u7ec4",
            "id":"test",
            "image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/img_class_16_14485281138197.png",
            "account":"13189612322",
            "appWeekList":[{"id":"22","name":"\u793e\u533a\u4ea4\u6d41","classId":"test","progress":1,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/img_week_22_14486123634808.png","links":[{"type":"oth","eid":"0","progress":1,"packageId":"22","url":"http:\/\/s.p.qq.com\/pub\/jump?d=AAAUnT5p","title":"\u793e\u533a\u5730\u5740"}]},{"id":"27","name":"\u7b2c\u5341\u8bfe\uff1a\u5fc3\u951a\u3001\u7ed3\u5408\u4e0e\u62bd\u79bb","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"108","progress":0,"packageId":"27","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/108","title":"\u7b2c\u5341\u8bfe\uff1a\u5fc3\u951a\u3001\u7ed3\u5408\u4e0e\u62bd\u79bb"},{"type":"wid","eid":"45","progress":0,"packageId":"27","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/45","title":"\u4f5c\u4e1a\uff1a\u7b2c\u5341\u8bfe_\u5fc3\u951a\u3001\u7ed3\u5408\u4e0e\u62bd\u79bb"},{"type":"oth","eid":"0","progress":1,"packageId":"27","url":"http:\/\/v.youku.com\/v_show\/id_XODEwNDQxNzc2.html","title":"\u7535\u5f71\uff1a\u300a\u6f47\u6d12\u8d70\u4e00\u56de\u300b"},{"type":"wid","eid":"46","progress":0,"packageId":"27","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/46","title":"\u9009\u505a\uff1a\u300a\u6f47\u6d12\u8d70\u4e00\u56de\u300b\u89c2\u540e\u611f"}]},{"id":"21","name":"\u7b2c\u4e5d\u8bfe\uff1a\u5f52\u7c7b\u6cd5\u4e0e\u611f\u77e5\u4f4d\u7f6e\u6cd5","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"96","progress":0,"packageId":"21","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/96","title":"\u7b2c\u4e5d\u8bfe\uff1a\u5f52\u7c7b\u6cd5\u4e0e\u611f\u77e5\u4f4d\u7f6e\u6cd5"},{"type":"wid","eid":"37","progress":0,"packageId":"21","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/37","title":"\u4f5c\u4e1a\uff1a\u7b2c\u4e5d\u8bfe_\u5f52\u7c7b\u6cd5\u4e0e\u611f\u77e5\u4f4d\u7f6e\u6cd5"},{"type":"oth","eid":"0","progress":1,"packageId":"21","url":"http:\/\/www.iqiyi.com\/v_19rrho3enw.html?fc=87451bff3f7d2f4a#vfrm=2-3-0-1","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u4eba\u751f\u9065\u63a7\u5668\u300b\u3002\u5efa\u8bae\u8d2d\u4e70\u767e\u5ea6\u4f1a\u5458"},{"type":"wid","eid":"38","progress":0,"packageId":"21","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/38","title":"\u9009\u505a\uff1a\u300a\u4eba\u751f\u9065\u63a7\u5668\u300b\u89c2\u540e\u611f"}]},{"id":"15","name":"\u7b2c\u516b\u8bfe\uff1a\u9f13\u52b1\u548c\u6fc0\u52b1","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"84","progress":0,"packageId":"15","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/84","title":"\u7b2c\u516b\u8bfe\uff1a\u9f13\u52b1\u548c\u6fc0\u52b1"},{"type":"wid","eid":"32","progress":0,"packageId":"15","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/32","title":"\u4f5c\u4e1a\uff1a\u7b2c\u516b\u8bfe_\u9f13\u52b1\u548c\u6fc0\u52b1"},{"type":"oth","eid":"0","progress":1,"packageId":"15","url":"http:\/\/m.56.com\/view\/id-NTU0ODQzMzY.html","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u5eb8\u4eba\u54c8\u5c14\u300b\u6d3b\u51fa\u4f60\u7684\u6b23\u8d4f\u529b"},{"type":"wid","eid":"33","progress":0,"packageId":"15","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/33","title":"\u9009\u505a\uff1a\u300a\u5eb8\u4eba\u54c8\u5c14\u300b\u89c2\u540e\u611f"}]},{"id":"14","name":"\u7b2c\u4e03\u8bfe\uff1a\u5148\u8ddf\u540e\u5e26+\u8d5e\u626c\u4e0e\u6279\u8bc4","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"75","progress":0,"packageId":"14","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/75","title":"\u7b2c\u4e03\u8bfe\uff1a\u5148\u8ddf\u540e\u5e26+\u8d5e\u626c\u4e0e\u6279\u8bc4"},{"type":"wid","eid":"30","progress":0,"packageId":"14","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/30","title":"\u4f5c\u4e1a\uff1a\u7b2c\u4e03\u8bfe_\u5148\u8ddf\u540e\u5e26+\u8d5e\u626c\u4e0e\u6279\u8bc4"},{"type":"oth","eid":"0","progress":1,"packageId":"14","url":"http:\/\/www.iqiyi.com\/dianying\/20100418\/n3559.html","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u653e\u725b\u73ed\u7684\u6625\u5929\u300b"},{"type":"wid","eid":"31","progress":0,"packageId":"14","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/31","title":"\u9009\u505a\uff1a\u300a\u653e\u725b\u73ed\u7684\u6625\u5929\u300b\u89c2\u540e\u611f"}]},{"id":"13","name":"\u7b2c\u516d\u8bfe\uff1aNLP\u6838\u5fc3\u548c\u4eb2\u548c\u6c9f\u901a","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"83","progress":0,"packageId":"13","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/83","title":"\u7b2c\u516d\u8bfe\uff1aNLP\u6838\u5fc3\u548c\u4eb2\u548c\u6c9f\u901a v2.0"},{"type":"wid","eid":"24","progress":0,"packageId":"13","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/24","title":"\u4f5c\u4e1a\uff1a\u7b2c\u516d\u8bfe_NLP\u6838\u5fc3\u548c\u4eb2\u548c\u6c9f\u901a"},{"type":"aid","eid":"68","progress":0,"packageId":"13","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/68","title":"NLP\u5341\u4e8c\u6761\u9884\u8bbe\u524d\u63d0"},{"type":"oth","eid":"0","progress":1,"packageId":"13","url":"http:\/\/v.youku.com\/v_show\/id_XNjM3NjgyMTA4.html?from=s1.8-1-1.2","title":"\u9009\u505a\uff1a\u300a\u7075\u5f02\u7b2c\u516d\u611f\u300b\u60ca\u609a\u5f71\u7247"},{"type":"wid","eid":"25","progress":0,"packageId":"13","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/25","title":"\u9009\u505a\uff1a\u300a\u7075\u5f02\u7b2c\u516d\u611f\u300b\u89c2\u540e\u611f"}]},{"id":"12","name":"\u7b2c\u4e94\u8bfe\uff1a\u7406\u89e3\u5c42\u6b21\u4e0e\u654f\u9510\u6d1e\u5bdf","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"82","progress":0,"packageId":"12","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/82","title":"\u7b2c\u4e94\u8bfe\uff1a\u7406\u89e3\u5c42\u6b21\u4e0e\u654f\u9510\u6d1e\u5bdf v2.0"},{"type":"wid","eid":"15","progress":0,"packageId":"12","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/15","title":"\u4f5c\u4e1a\uff1a\u7b2c\u4e94\u8bfe_\u201c\u7406\u89e3\u5c42\u6b21\u4e0e\u654f\u9510\u6d1e\u5bdf\u201d"},{"type":"oth","eid":"0","progress":1,"packageId":"12","url":"http:\/\/www.iqiyi.com\/dianying\/20120517\/cbf31b7866b9dd7c.html?vfm=2008_aldbd","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u4e09\u50bb\u5927\u95f9\u5b9d\u83b1\u575e\u300b\u4e0a"},{"type":"oth","eid":"0","progress":1,"packageId":"12","url":"http:\/\/www.iqiyi.com\/dianying\/20120517\/3c5d67f6c0e3c113.html#vfrm=3-6-3-1","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u4e09\u50bb\u5927\u95f9\u5b9d\u83b1\u575e\u300b\u4e0b"},{"type":"wid","eid":"23","progress":0,"packageId":"12","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/23","title":"\u9009\u505a\uff1a\u300a\u4e09\u50bb\u5927\u95f9\u5b9d\u83b1\u575e\u300b\u89c2\u540e\u611f"}]},{"id":"11","name":"\u7b2c\u56db\u8bfe\uff1a\u63d0\u5347\u89c9\u5bdf\u529b","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"102","progress":0,"packageId":"11","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/102","title":"\u7b2c\u56db\u8bfe\uff1a\u63d0\u5347\u89c9\u5bdf\u529b v2.1"},{"type":"wid","eid":"44","progress":0,"packageId":"11","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/44","title":"\u4f5c\u4e1a\uff1a\u201c\u63d0\u5347\u89c9\u5bdf\u529b\u201d_v2.1"},{"type":"oth","eid":"0","progress":1,"packageId":"11","url":"http:\/\/m.56.com\/view\/id-NTgyNzI2MTU.html","title":"\u9009\u505a\uff1a\u7535\u5f71\u300a\u5730\u7403\u4e0a\u7684\u661f\u661f\u300b"},{"type":"wid","eid":"22","progress":0,"packageId":"11","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/22","title":"\u9009\u505a\uff1a\u300a\u5730\u7403\u4e0a\u7684\u661f\u661f\u300b\u89c2\u540e\u611f"},{"type":"aid","eid":"48","progress":0,"packageId":"11","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/48","title":"\u4eba\u751f\u4e94\u7ae0"}]},{"id":"10","name":"\u7b2c\u4e09\u8bfe\uff1a\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"80","progress":0,"packageId":"10","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/80","title":"\u7b2c\u4e09\u8bfe\uff1a\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898 V2.0"},{"type":"wid","eid":"18","progress":0,"packageId":"10","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/18","title":"\u4f5c\u4e1a\uff1a\u201c\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898\u201d"},{"type":"oth","eid":"0","progress":1,"packageId":"10","url":"http:\/\/pan.baidu.com\/s\/1bnGzXoV","title":"\u300a\u5934\u8111\u7279\u5de5\u961f\u300b \u5bc6\u7801:c97j"},{"type":"wid","eid":"21","progress":0,"packageId":"10","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/21","title":"\u9009\u505a\uff1a\u300a\u5934\u8111\u7279\u5de5\u961f\u300b\u89c2\u540e\u611f"}]},{"id":"5","name":"\u7b2c\u4e8c\u8bfe\uff1a\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f","classId":"test","progress":0,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"74","progress":0,"packageId":"5","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/74","title":"\u7b2c\u4e8c\u8bfe\uff1a\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f v2.0"},{"type":"wid","eid":"17","progress":0,"packageId":"5","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/17","title":"\u4f5c\u4e1a\uff1a\u201c\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f\u201d"}]},{"id":"6","name":"\u7b2c\u4e00\u8bfe\uff1a\u610f\u8bc6\u4e0e\u6f5c\u610f\u8bc6","classId":"test","progress":0.5,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"79","progress":0,"packageId":"6","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/79","title":"\u7b2c\u4e00\u8bfe\uff1a\u610f\u8bc6\u4e0e\u6f5c\u610f\u8bc6 v2.0"},{"type":"wid","eid":"26","progress":0,"packageId":"6","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/26","title":"\u4f5c\u4e1a\uff1a\u610f\u8bc6\u548c\u6f5c\u610f\u8bc6"},{"type":"oth","eid":"0","progress":1,"packageId":"6","url":"http:\/\/www.tudou.com\/programs\/view\/IVJsneXrYUk\/","title":"\u52a0\u56fa\u4f5c\u4e1a\uff1a\u7535\u5f71\u300a\u5c0f\u5b69\u4e0d\u7b28\u300b"},{"type":"wid","eid":"20","progress":0,"packageId":"6","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/20","title":"\u9009\u505a\uff1a\u300a\u5c0f\u5b69\u4e0d\u7b28\u300b\u89c2\u540e\u611f"}]},{"id":"23","name":"\u5e7c\u5e08\u7b2c\u4e00\u8bfe\uff1a\u610f\u8bc6\u4e0e\u6f5c\u610f\u8bc6","classId":"test","progress":1,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"97","progress":0,"packageId":"23","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/97","title":"\u5e7c\u5e08\u7b2c\u4e00\u8bfe\uff1a\u610f\u8bc6\u4e0e\u6f5c\u610f\u8bc6"},{"type":"wid","eid":"39","progress":0,"packageId":"23","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/39","title":"\u5e7c\u5e08\u4f5c\u4e1a\uff1a\u7b2c\u4e00\u8bfe_\u610f\u8bc6\u548c\u6f5c\u610f\u8bc6"},{"type":"oth","eid":"0","progress":1,"packageId":"23","url":"http:\/\/www.tudou.com\/programs\/view\/IVJsneXrYUk\/","title":"\u7535\u5f71\u300a\u5c0f\u5b69\u4e0d\u7b28\u300b"},{"type":"wid","eid":"20","progress":0,"packageId":"23","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/20","title":"\u9009\u505a\uff1a\u300a\u5c0f\u5b69\u4e0d\u7b28\u300b\u89c2\u540e\u611f"}]},{"id":"24","name":"\u5e7c\u5e08\u7b2c\u4e8c\u8bfe\uff1a\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f","classId":"test","progress":1,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"98","progress":0,"packageId":"24","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/98","title":"\u5e7c\u5e08\u7b2c\u4e8c\u8bfe\uff1a\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f"},{"type":"wid","eid":"40","progress":0,"packageId":"24","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/40","title":"\u5e7c\u5e08\u4f5c\u4e1a\uff1a\u7b2c\u4e8c\u8bfe_\u201c\u6539\u53d8\u601d\u7ef4\u6a21\u5f0f\u201d"}]},{"id":"25","name":"\u5e7c\u5e08\u7b2c\u4e09\u8bfe\uff1a\u201c\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898\u201d","classId":"test","progress":1,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"aid","eid":"99","progress":1,"packageId":"25","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/You\/article_info\/aid\/99","title":"\u5e7c\u5e08\u7b2c\u4e09\u8bfe\uff1a\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898"},{"type":"wid","eid":"41","progress":0,"packageId":"25","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Works\/work_model\/wid\/41","title":"\u5e7c\u5e08\u4f5c\u4e1a\uff1a\u7b2c\u4e09\u8bfe_\u201c\u60c5\u7eea\u7ba1\u7406\u4e0e\u8ba4\u8bc6\u95ee\u9898\u201d"}]},{"id":"29","name":"\u6bcf\u5929\u71ac\u9e21\u6c64","classId":"test","progress":1,"image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/week_org.png","links":[{"type":"mid","eid":"12","progress":0,"packageId":"29","url":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Log\/log_model\/mid\/12","title":"\u6bcf\u5929\u71ac\u9e21\u6c64"}]}]
        },

        {
            "name":"\u516c\u5f00\u7ec4",
            "id":"vqzfree",
            "image":"http:\/\/www.jiaxx.cn\/bobi\/pcCourse\/Public\/image\/class\/qibiao.png",
            "account":"13189612322",
            "appWeekList":[]
        }
    ];
     **/
    var userClasses = null;


    this.getClassAsync = function()
    {
        if(userClasses)
        {
            $rootScope.$broadcast("classGettedSuccess", userClasses);
            return;
        }

        var userId = UserModel.getUserId();
        $http(
            {
                url:'http://www.jiaxx.cn/bobi/pcCourse/App/getClass/',
                method:'GET',
                params:
                {
                    account:userId
                }

            }).success(function(data,header,config,status)
            {
                userClasses = data.user_class;

                $rootScope.$broadcast("classGettedSuccess", userClasses);

            }).error(function(data,header,config,status)
            {
                $rootScope.$broadcast("classGettedFailure");
            });
    };

    this.getCoursePackageAsync = function(classId)
    {
        if(!userClasses)
        {
            //班级信息没获取，自动获取班级信息
            var classGettedSuccessListener =  $rootScope.$on("classGettedSuccess", classGettedSuccessHandler);
            function classGettedSuccessHandler()
            {
                self.getCoursePackageAsync(classId);
            }
            self.getClassAsync();
            return;
        }

        var userClass;
        for(var i = 0; i < userClasses.length; ++i)
        {
            if(userClasses[i].id == classId )
            {
                userClass = userClasses[i];
                break;
            }
        }

        if(!userClass)
        {
            alert("找不到"+ classId +"的班级信息");
            return;
        }

        if(userClass.appWeekList)
        {
            $rootScope.$broadcast("coursePackageGettedSuccess", userClass);
            return;
        }

        var userId = UserModel.getUserId();

        $http(
            {
                url:'http://www.jiaxx.cn/bobi/pcCourse/App/getCoursePackage/',
                method:'GET',
                params:
                {
                    account:userId,
                    classId:classId
                }

            }).success(function(data,header,config,status)
            {
                userClass.appWeekList = data.app_week_list;

                $rootScope.$broadcast("coursePackageGettedSuccess", userClass);

            }).error(function(data,header,config,status)
            {
                $rootScope.$broadcast("coursePackageGettedFailure");
            });
    }

});