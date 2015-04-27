/**
 * Created by richard.m.infantado on 4/10/2015.
 */

app.directive('ramosValueSelect', function() {
    return {
        restrict: "E",
        scope: {
            entry: "=",
            field: "@",
            options: "=",
            onInputChange: "&"
        },
        controller: function($scope) {

            $scope.onChange = function() {
                console.log("selected changed");
                $scope.entry.type = $scope.option.value;
                $scope.onInputChange();
            };

            var getItemForValue = function(value) {
                var item = null;
                $scope.options.forEach(function(_option) {
                    if (_option.value == value) {
                        item = _option;
                    }
                });
                return item;
            };

            $scope.$watch("entry", function() {
                console.log("entry changed");
                $scope.option = getItemForValue($scope.entry[$scope.field]);
            }, true);

        },
        template: '<tr><td><a><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td><td><select ng-model="option" ng-options="o.name for o in options" ng-change="onChange()"></td></tr>'

    };
});