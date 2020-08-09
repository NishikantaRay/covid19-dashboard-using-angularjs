const URL = "https://covid19.mathdro.id/api";


let app = angular.module("myApp", [] );
//controller 
app.controller("myCtrl", ($scope,$http) => {
    //title 
    $scope.title =" Stay Home Stay Safe ";

    console.log(" APP Loaded ");


    $http.get(URL).then(
        //success
        (response) => { 
            // console.log("Inside Sucess");
            // console.log("APP Loaded");
            console.log(response.data);

            $scope.all_data = response.data;
    
        },(error) => { 

            console.log(error);
        }
    );
        
    
        $scope.get_c_data = () => {
            
            let country = $scope.c;
            
            if(country == "") {
                return;
            }

            $http.get(`${URL}/countries/${country}`).then(
                (response) => {
                console.log(response.data);
                $scope.c_data = response.data;

            },(error) => {
                console.log(error);

            });
        };



});