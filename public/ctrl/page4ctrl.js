angular.module('page4App', [])
    .controller('page4Ctrl', function($scope, $http) {
        var todoList = this;
        todoList.todos = [
            { text: 'Yes', done: true },
            { text: 'No', done: false },
            { text: 'Maybe/Not Sure', done: false },
            { text: 'Not now maybe when the site has loads of traffic', done: false }
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

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
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