angular.module('page1App', [])
    .controller('page1Ctrl', function() {
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