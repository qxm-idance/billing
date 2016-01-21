main.controller('indexCtrl', ['$scope','dialogs','CS','$timeout','$filter','dialogs',function ($scope,dialogs,CS,$timeout,$filter,dialogs){
    $scope.voiceId=voiceId;
    $scope.smsId=smsId;
    $scope.ismpId=ismpId;
    $scope.mmsId=mmsId;
    $scope.serviceId=serviceId;
    $scope.recurringId=recurringId;
    $scope.OneTimeChargeId=OneTimeChargeId;
    $scope.bNumberDis=false;//bNumberDis控制bNumber是否显示完全，默认截取后两个
    $scope.p={
        billNumber:'',
        accountId:'',
        billDate:1,
        dateRangeType:2,
        typeModel: $scope.voiceId,
        startDate:'',
        endDate:''
    };

    //查询serviceId
//    CS.query({}).then(function(d){
//            d={"data":[{"text":"ALL","value":"1"},{"text":"VOICE","value":"50001"},{"text":"SMS","value":"50005"},{"text":"ISMP","value":"50006"},{"text":"MMS","value":"50014"},{"text":"Data Service","value":"53001"},{"text":"Recurring Charge","value":"70001"},{"text":"One Time Charge","value":"70002"}],"success":true};
//            d=d.data;
//            if(d.success){
//                $scope.serviceIdData= d.data;
//                $scope.serviceIdCheckedData=_.drop($scope.serviceIdData);//初始化
//                $scope.serviceIdChecked=[1];
//            }else{
//                dialogs.error("Error","msg",{'width':500});
//            })


    var d={"data":[{"text":"ALL","value":1},{"text":"VOICE","value":50001},{"text":"SMS","value":50005},{"text":"ISMP","value":50006},{"text":"MMS","value":50014},{"text":"Data Service","value":53001},{"text":"Recurring Charge","value":70001},{"text":"One Time Charge","value":70002}],"success":true};
    $scope.serviceIdData= d.data;
    $scope.serviceIdChecked=[1];//初始化
    $scope.serviceIdCheckedData=_.drop($scope.serviceIdData);//初始化


    //查询serviceId相关操作

    $scope.query=function(){
        if($scope.serviceIdChecked[0]==1){//选择All
            $scope.bNumberDis=false;
            $scope.serviceIdCheckedData=_.drop($scope.serviceIdData);
            getVoiceGridData();
            getIsmpGridData();
            getMmsGridData();
            getOnetimeGridData();
            getRecurrGridData();
            getServiceGridData();
            getSmsGridData();
        }else{//多选或单选
            $scope.serviceIdCheckedData=serviceIdToObj($scope.serviceIdData,$scope.serviceIdChecked);
            _.each($scope.serviceIdChecked,function(it){
                doSearchGridData(it);
            })
        }
    }

    //function 根据serviceIdChecke(只有value值)得出选中的serviceId对象。
    var serviceIdToObj=function(serviceIdObj,serviceId){
        var arr=serviceId;
        var arrObj=[];
        for (i=0,len=arr.length;i<len;i++){
            var arrWant=_.filter(serviceIdObj, _.matches({'value': arr[i] }));
            arrObj.push(arrWant[0]);
        }
        return arrObj;
    }
    //初始化页面Date Range Type
    $scope.dateTypeData=[{text:'Bill Date',value:1},{text:'Custom Date',value:2}];

    //选择 Bill Date 执行的动作
    $scope.$watch('p.dateRangeType',function(a){
        if(a==1){
            getBillDateData();
        }else{
            $scope.billDateData='';
            $scope.p.startDate=+new Date(new Date().getFullYear(),new Date().getMonth(),1);
            $scope.p.endDate=new Date(new Date().getFullYear(),new Date().getMonth()+1,1)-24*60*60;
        }
    })
    // 获取下拉列表Bill Date
    var getBillDateData=function(){
//        CS.queryBillDate({accountId:$scope.p.accountId,billNumber:$scope.p.billNumber}).then(function(d){
//            d= d.data;
            d={"data":[
                {"text":"27/08/2015~11/09/2015","value":"20150827-20150911"},
                {"text":"27/07/2015~11/07/2015","value":"20150727-20150711"},
                {"text":"27/06/2015~11/06/2015","value":"20150627-20150611"},
                {"text":"27/05/2015~11/05/2015","value":"20150527-20150511"},
                {"text":"27/04/2015~11/04/2015","value":"20150427-20150411"},
                {"text":"27/03/2015~11/03/2015","value":"20150327-20150311"}
            ],"success":true};

            if(d.success){
                $scope.billDateData= d.data;
            }
//        })
    }

    $scope.display=function(){
     //用来设置一个值，dis (true or false) 来控制 具体是截取显示 还是不截取显示
        $scope.bNumberDis=!$scope.bNumberDis;
    }

    $scope.export=function(){
        console.log('export');
    }

    /*function time-millseconds to time-string*/
    var timeToStr =function(timeVal){
        time=$filter('date')(timeVal,'yyyy-MM-dd');
        return _.camelCase(time);
    }

    /*function serviceId(value-text) to string*/
    var serviceIdToStr =function(para){
        var arr=[];
        _.each(para,function(it){
            var whole=it.value+'-'+it.text;
            arr.push(whole);
        })
        return arr.join(',');
    }
    //入参
    var paraData={
        dateRangeType:$scope.p.dateRangeType,
        phone:$scope.p.billNumber,
        serviceId:serviceIdToStr($scope.serviceIdCheckedData),
        accountId:$scope.p.accountId,
        callType:'',
        roamType:'',
        lang:'en',
        startTime:timeToStr($scope.p.startDate),
        endTime:timeToStr($scope.p.endDate)
    }

    //分页初始化  对应表格配置的分页条件  page-items current-page
    $scope.pagingOptionsVoice={
        limit:10,
        start:0
    }
    //分页回调 对应表格配置的 on-data-required
    $scope.onGridPagerVoice=function(start,limit){
        getVoiceGridData({limit:limit,start:start});
    }
    //数据请求
     var getVoiceGridData=function(q){
         console.log('getVoiceGridData');
//        CS.findAndPageVoiceAction(conditions:paraData,q||$scope.pagingOptionsVoice).then(function(d){
//            d= d.data;
          d={"data":[{"bNumber":"4520600301","callCategory":"N/A","duration":"00:05:06","roamCountryId":"DENMARK","chargedDur":"360 s","roamOperator":"Telenor A/S","ismi":"0","cellId":"2778","tollFee":"0","airtimeFee":"4.50 DKK","connectionFee":"0","isBilled":"Yes","time":"16:28:00","date":"2015-10-26","tax":"0.90 DKK","pay":"4.50 DKK"},{"bNumber":"4520600301","callCategory":"Calls to Canada from DK","duration":"00:05:06","roamCountryId":"DENMARK","chargedDur":"360 s","roamOperator":"Telenor A/S","ismi":"0","cellId":"2778","tollFee":"0.50 DKK","airtimeFee":"4.50 DKK","connectionFee":"1.50 DKK","isBilled":"Yes","time":"16:26:00","date":"2015-10-25","tax":"0.90 DKK","pay":"6.50 DKK"},{"bNumber":"4520600301","callCategory":"Domestic calls","duration":"00:02:33","roamCountryId":"DENMARK","chargedDur":"180 s","roamOperator":"Telenor A/S","ismi":"0","cellId":"2778","tollFee":"0","airtimeFee":"0","connectionFee":"0","isBilled":"Yes","time":"15:25:00","date":"2015-10-24","tax":"0.45 DKK","pay":"0"},{"bNumber":"4520600301","callCategory":"Calls to Canada from DK","duration":"00:02:33","roamCountryId":"DENMARK","chargedDur":"180 s","roamOperator":"Telenor A/S","ismi":"0","cellId":"2778","tollFee":"0","airtimeFee":"0","connectionFee":"0","isBilled":"Yes","time":"16:25:00","date":"2015-10-23","tax":"0.45 DKK","pay":"0"}],"total":4,"success":true};
            if(d.success){
                $scope.gridDataVoice= d.data;//对应表格配置的 items
                _.each($scope.gridDataVoice,function(it){
                    var len=it.bNumber.length;
                    it.bNumberCut=it.bNumber.slice(0,len-2);
                })
                $scope.totalVoice= d.total;//对应表格配置的 page-items
            }else{
              console.log('error');
            }
//        })
    }
    // 获取sms表格数据
    $scope.pagingOptionsSms={
        limit:10,
        start:0
    }
    $scope.onGridPagerSms=function(start,limit){
        getSmsGridData({limit:limit,start:start});
    }
    var getSmsGridData=function(){

        console.log('getSmsGridData');
        $scope.smsGridData=[{a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];
    }
    // 获取Mms表格数据

    $scope.pagingOptionsMms={
        limit:10,
        start:0
    }
    $scope.onGridPagerMms=function(start,limit){
        getMmsGridData({limit:limit,start:start});
    }
    var getMmsGridData=function(){
        console.log('getMmsGridData');
        $scope.mmsGridData=[{a:3,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];

    }

    // 获取Service表格数据
    $scope.pagingOptionsService={
        limit:10,
        start:0
    }
    $scope.onGridPagerService=function(start,limit){
        getServiceGridData({limit:limit,start:start});
    }
    var getServiceGridData=function(){
        console.log('getServiceGridData');
        $scope.serviceGridData=[{a:4,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];

    }

    // 获取Ismp表格数据
    $scope.pagingOptionsIsmp={
        limit:10,
        start:0
    }
    $scope.onGridPagerIsmp=function(start,limit){
        getIsmpGridData({limit:limit,start:start});
    }
    var getIsmpGridData=function(){
        console.log('getIsmpGridData');
        $scope.ismpGridData=[{a:5,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];
    }

    // 获取Recurr表格数据
    $scope.pagingOptionsRecurr={
        limit:10,
        start:0
    }
    $scope.onGridPagerRecurr=function(start,limit){
        getRecurrGridData({limit:limit,start:start});
    }
    var getRecurrGridData=function(){
        console.log('recurrGridData');
        $scope.recurrGridData=[{a:6,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];
    }

    // 获取Onetime表格数据
    $scope.pagingOptionsOnetime={
        limit:10,
        start:0
    }
    $scope.onGridPagerOnetime=function(start,limit){
        getOnetimeGridData({limit:limit,start:start});
    }
    var getOnetimeGridData=function(){
        console.log('getOnetimeGridData');
        $scope.onetimeGridData=[{a:7,b:7,c:71,d:7,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1}];
    }

   //根据 seviceId的value值来确定调那个方法
   var doSearchGridData=function(busId){
        switch(busId)
        {
            case $scope.voiceId:
                getVoiceGridData($scope.pagingOptionsVoice);
                break;
            case $scope.smsId:
                getSmsGridData($scope.pagingOptionsSms);
                break;
            case $scope.ismpId:
                getIsmpGridData($scope.pagingOptionsIsmp);
                break;
            case $scope.mmsId:
                getMmsGridData($scope.pagingOptionsMms);
                break;
            case $scope.serviceId:
                getServiceGridData($scope.pagingOptionsService);
                break;
            case $scope.recurringId:
                getRecurrGridData($scope.pagingOptionsRecurr);
                break;
            case $scope.OneTimeChargeId:
                getOnetimeGridData($scope.pagingOptionsOnetime);
                break;
        }
   }
    //tab 切换 触发相应的动作
//    $scope.onTypeChange=function(busId){
//
//    }
}]);
