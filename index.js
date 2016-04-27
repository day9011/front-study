/**
 * Created by dinghanyu on 4/25/16.
 */

var app = angular.module("myApp", []);
app.controller('getNews', function ($scope, $http) {
    $http({
        method : "GET",
        url : "http://121.42.145.214:8888/news-num?cursor=0&num=10",
        header : {
            "Access-Control-Request-Headers" : "day9011",
            "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36"
        }
    }).then(function success(res) {
        $scope.news = res.data.news;
        console.log(res.data);
    }, function err(res) {
        console.log(res.status);
    });
});

