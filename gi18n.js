main.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('en', {
		'CHOOSE':'Choose',
		'ALL':'All',
		'NODATA':'No Data',
		'SEARCH_BTN':'Search',
		'ACTIONS':'Actions',
		'DIALOGS_OK': "OK",
		'DIALOGS_CANCEL': "Cancel",
		'BUSINESS':'Business',
		'MONITOR':'Monitor',
		'MDB':'MDB',
		'TOOL':'Tool'
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
