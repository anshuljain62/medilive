/**
 * Created by Somya Kumar Sodani on 24-09-2016.
 */
var app = angular.module('myApp',['ui.router']);
var apimedic='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNvbXlhLnNvZGFuaUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjY1MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNi0wOC0yNyIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDc1ODMyMDA5LCJuYmYiOjE0NzU4MjQ4MDl9.B5KJdx097dXUHvwUtXUeG3AdKU-VIauTt7MMd70ZqN0';
app.config(function($stateProvider, $urlRouterProvider) {



    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('health', {
            url: '/health',
            templateUrl: 'health.html'
        })

        .state('blog', {
            url: '/blog',
            templateUrl: 'blog/blog.html'

        })

        .state('login', {
            url: '/login',
            templateUrl: 'form/login.html'

        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'form/signup.html'

        })




});



app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : 'https://sandbox-healthservice.priaid.ch/body/locations?token='+apimedic+'&language=en-gb'
    }).then(function mySucces(response) {
        $scope.allbodyparts = response.data;
    }, function myError(response) {
        $scope.allbodyparts = response.statusText;
    });
});

app.controller('subbodyparts', function($scope, $http) {

    $scope.bdyid="15";

    $scope.callurl=function () {


        $http({
            method : "GET",
            url : 'https://sandbox-healthservice.priaid.ch/body/locations/'+$scope.bdyid+'?token='+apimedic+'&language=en-gb',
        }).then(function mySucces(response) {
            $scope.subbdyparts = response.data;
        }, function myError(response) {
            $scope.subbdyparts = response.statusText;
        });

    }
});
app.controller('showsympsub', function($scope, $http) {

    $scope.subbdy="15";
    $scope.selector="man";
    $scope.refreshurl=function () {
        $scope.urlcheck='https://sandbox-healthservice.priaid.ch/symptoms/'+$scope.subbdy+'/'+$scope.selector+'?token='+apimedic+'&language=en-gb' ;
    }


    $scope.symptomshow=function () {


        $http({
            method : "GET",
            url : 'https://sandbox-healthservice.priaid.ch/symptoms/'+$scope.subbdy+'/'+$scope.selector+'?token='+apimedic+'&language=en-gb',
        }).then(function mySucces(response) {
            $scope.symptomcom = response.data;
        }, function myError(response) {
            $scope.symptomcom= response.statusText;
        });

    }

    $scope.manclick=function () {


        $scope.selector="man";
        $scope.symptomshow();

    }
    $scope.womanclick=function () {


        $scope.selector="woman";
        $scope.symptomshow();

    }
    $scope.boyclick=function () {


        $scope.selector="boy";
        $scope.symptomshow();

    }
    $scope.girlclick=function () {


        $scope.selector="girl";
        $scope.symptomshow();

    }


});







app.controller('BlogController', ['$http', function($http){

    var blog = this;
    blog.title = "MediLive Blog ";

    blog.posts = {};

    blog.posts = [
        {
            "title": "Blog Post One",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },
        {
            "title": "Blog Post Two",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },

        {
            "title": "Blog Post Three",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },

        {
            "title": "Blog Post Four",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        }


    ];
    blog.tab = 'blog';

    blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
    };

    blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
    };

    blog.post = {};
    blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
    };

}]);

app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment ={};
    };
});





