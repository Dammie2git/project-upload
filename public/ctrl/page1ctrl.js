angular.module('page1App', [])
    .controller('page1Ctrl', function($scope, $http) {
        var todoList = this;
        todoList.todos = [
            { text: 'App', done: true },
            { text: 'Website', done: false },
            { text: 'Game', done: false },
            { text: 'Dont know to be honest', done: false }
        ];

        todoList.addTodo = function() {
            todoList.todos.push({ text: todoList.todoText, done: false });
            todoList.todoText = '';
        };

        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };


    });


var app = angular.module('app', []);
app.controller('ListCtrl', function($scope) {
    console.log('ListCtrl started');
    $scope.list = [
        { name: 'Eggs' },
        { name: 'Milk' },
        { name: 'Ham' }
    ];
    $scope.addItem = function() {
        // Push a new item to our list.  This needs to be an object
        $scope.list.push({
            name: $scope.newItem
        });
        // Reset newItem to a blank string
        $scope.newItem = '';
    };
    $scope.removeItem = function(item) {
        console.log('removeItem()\t item=', item);
        // find the index of the item we want to remove
        var index = $scope.list.indexOf(item);
        // Remove the item from our list
        $scope.list.splice(index, 1);
    };
});


/*var page4 = angular.module('page4', ["checklist-model"])
page4.controller('page4Ctrl', function($scope) {
    $scope.lists = [
        { options: 'Yes' },
        { options: 'No' },
        { options: 'Maybe or Not Sure' },
        { option: 'Not now, Maybe when the site is popular' }
    ];

    $scope.user = {
        options: ['user']
    };


});*/