    <%--<%@ page language="java" contentType="text/html; charset=utf-8"--%>
             <%--pageEncoding="utf-8"%>--%>
        <%--<script type="text/javascript">--%>
        <%--var contextPath='<%=request.getContextPath()%>';--%>
        <%--</script>--%>
    <!DOCTYPE>
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>

        <!--<link type="text/css" rel="stylesheet" href="build/common-concat-min.css">-->
        <link type="text/css" rel="stylesheet" href="css/base.css">
        <link type="text/css" rel="stylesheet" href="css/bootstrap.css">
        <link type="text/css" rel="stylesheet" href="css/modules.css">
        <link type="text/css" rel="stylesheet" href="css/layout.css">

        <link type="text/css" rel="stylesheet" href="css/button-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-button.css">

        <link type="text/css" rel="stylesheet" href="css/checkbox-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-checkbox.css">

        <link type="text/css" rel="stylesheet" href="css/input-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-input.css">

        <link type="text/css" rel="stylesheet" href="css/dialogs-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-dialogs.css">

        <link type="text/css" rel="stylesheet" href="css/select-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-select.css">

        <link type="text/css" rel="stylesheet" href="css/dropdown-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-dropdown.css">

        <link type="text/css" rel="stylesheet" href="css/grid-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-grid.css">

        <link type="text/css" rel="stylesheet" href="css/datepicker-theme-default.css">
        <link type="text/css" rel="stylesheet" href="css/ui-datepicker.css">

        <link type="text/css" rel="stylesheet" href="css/ui-grid.css">
        <link type="text/css" rel="stylesheet" href="css/ui-input-select.css">
        <link type="text/css" rel="stylesheet" href="css/common.css">


        <script type="text/javascript" src="resouces/vendor/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="resouces/vendor/lodash.min.js"></script>
        <script type="text/javascript" src="resouces/vendor/angular.js"></script>
        <script type="text/javascript" src="resouces/vendor/angular-sanitize.js"></script>
        <script type="text/javascript" src="resouces/vendor/angular-ui-router.js"></script>
        <script type="text/javascript" src="resouces/vendor/angular-translate.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.js"></script>

        <script type="text/javascript" src="resouces/lab/ui.buttons.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.checkbox.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.transition.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.modal.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.dialogs.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.select.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.dropdown.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.position.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.datepicker.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.dateparser.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.timepicker.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.timepicker.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.grid.js"></script>
        <script type="text/javascript" src="resouces/lab/ui.inputSelect.js"></script>


        <!--<script type="text/javascript" src="build/common-concat-min.js"></script>-->
        <script type="text/javascript" src="gi18n.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/router.js"></script>
        <script type="text/javascript" src="js/services.js"></script>
        <script type="text/javascript" src="js/index.ctrl.js"></script>
        <!--  <script type="text/javascript" src="js/gi18n.js"></script> -->
        <!--<script type="text/javascript" src="gi18n.js"></script>-->
        </head>
        <body>
        <div id="main" ui-view="main"></div>
        <script type="text/javascript">
        // var contextPath = request.getContextPath();
        var lang='en';
        (function(){
        //启动
        angular.bootstrap(document.getElementsByTagName('html')[0],['ui']);
        })();
        </script>
        </body>
        </html>

