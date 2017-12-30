(function() {
    'use strict';
    
    angular.module( 'LunchCheck', [] ).controller( 'LunchCheckController', function ( $scope ) {
        console.log( "hello" );
        $scope.lunchMenu = '';
        $scope.checkLunch = function() {
            var menuItemCount = $scope.lunchMenu.split( ',' ).length;
            if ( menuItemCount > 3 ) {
                $scope.lunchMessage = "Too much!";
            }
            else if ( $scope.lunchMenu ) {
                $scope.lunchMessage = "Enjoy!";
            }
            else {
                $scope.lunchMessage = "Please enter data first";
            }
        };
    } );
} )();
