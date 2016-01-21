main.factory('CS', ['$http', '$q','$rootScope',function($http, $q,$rootScope) {
    var _get = function (url,p) {
        var _defer = $q.defer();
        $http.get(ui.url(url, p)).then(_defer.resolve, _defer.reject);
        return _defer.promise;
    };

    var _post = function (url,p) {
        var _defer = $q.defer();
        $http.post(url,p).then(_defer.resolve, _defer.reject);
        return _defer.promise;
    };

    // var _url={
    //      queryBillDate:contextPath+'/xdrinquiry/XdrinquiryActionJar/queryBillDate.go'
    //      findAndPageVoiceAction:contextPath+'/xdrinquiry/XdrinquiryActionJar/findAndPageVoiceAction.go'
    // }

    return{
//        queryBillDate:function(p){
//             return _get(_url.queryBillDate,p);
//        },
//        findAndPageVoiceAction:function(p){
//             return _get(_url.queryBillDate,p);
//        }
    }
}]);

