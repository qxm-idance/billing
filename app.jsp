    <%@ page language="java" contentType="text/html; charset=utf-8"
             pageEncoding="utf-8"%>
        <script type="text/javascript">
        var contextPath='<%=request.getContextPath()%>';
        </script>
        <!DOCTYPE>
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>

        <link type="text/css" rel="stylesheet" href="build/common-concat-min.css">


        <script type="text/javascript" src="build/common-concat-min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/router.js"></script>
        <script type="text/javascript" src="js/services.js"></script>
        <script type="text/javascript" src="js/index.ctrl.js"></script>
        <script type="text/javascript" src="js/config.js"></script>
        <script type="text/javascript" src="js/i18n.js"></script>

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

