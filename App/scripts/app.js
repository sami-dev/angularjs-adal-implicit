'use strict';
angular.module('idTokenApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', '$locationProvider', function ($routeProvider, $httpProvider, adalProvider,  $locationProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/IdTokenSpa/App/Views/Home.html",
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/IdTokenSpa/App/Views/UserData.html",
    }).when("/MyApps", {
        controller: "myAppsCtrl",
        templateUrl: "/IdTokenSpa/App/Views/MyApps.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            /* Okta Configurations - Start */
            instance: 'https://dev-608385.oktapreview.com/oauth2/aus9879yl34mFr9Hg0h7/v1/',
            tenant: '0oa9vzg52rY1HgfOE0h7', /*idp*/
            clientId: '0oad8sd0rt241wdKp0h7',
            /* Okta Configurations - End */
            //instance: 'https://login.microsoftonline.com/',
            //tenant: 'Enter_your_tenant_name_here_e.g._contoso.onmicrosoft.com',
            //clientId: 'Enter_your_client_ID_here_e.g._e9a5a8b6-8af7-4719-9821-0deef255f68e',
            popUp: false,
            // postLogoutRedirectUri: 'https://uat.solo.realogyfg.com/IdTokenSpa/',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );

        $locationProvider.html5Mode(false).hashPrefix('');
}]);
