main.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('en', {
		'DATE':'Date',
		'NAME':'Name',
		'B_NUMBER':'B Number',
		'DURATION':'Duration',
		'CHARGED':'Charged',
        'TAX':'Tax',
        'ROAM_COUNTRY':'Roam Country',
        'ROAM_OPERATOR':'Roam Operator',
        'Charged_Duration':'Charged Duration',
        'Toll_Fee':'Toll_Fee',
        'Airtime_Fee':'Airtime Fee',
        'Connection_Fee':'Connection Fee',
        'Call_Category':'Call Category',
        'isBilled':'isBilled',
		'DIALOGS_OK': "OK",
		'DIALOGS_CANCEL': "Cancel"

	}).translations('zh_CN', {
		'CHOOSE':'请选择',
		'ALL':'全部',
		'NODATA':'无数据',
		'SEARCH_BTN':'搜索',
		'ACTIONS':'操作',
		'BUSINESS':'业务管理',
		'MONITOR':'业务监控',
		'MDB':'MDB管控',
		'TOOL':'工具'
	});
	$translateProvider.preferredLanguage(lang || 'en');
}]);
