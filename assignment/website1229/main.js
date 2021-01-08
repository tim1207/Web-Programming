// TODO: Select #createTodoForm
$("#createTodoForm").submit(function (event) {
    // TODO: Prevent page reflash action when form is submitted
    event.preventDefault();
    // TODO: Get the value of #todoTitle
    var todo ={
        title:$("#todoTitle").val(),
        text:$("#todoText").val()
    }
    
    // TODO: Get the value of #todoText
    
    // TODO: Append a new todo with title and text to #todoList
    var all = '<li class ="list-group-item">' + todo.title+ ":" + todo.text+'</li>'
    $(".list-group").append(all)
    // $("#todolist").append(todo.title +" " + todo.text+" ")
    // You could use $(TARGER).append()
    // More info: https://api.jquery.com/append/

});


