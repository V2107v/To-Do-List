$(function () {
    
    //Check off Specific todo by Clicking
    $('ul').on("click","li",function() {
       $(this).toggleClass("completed");     
    });

    //Click the icon to delete todo.
    $('ul').on("click","span",function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

    //Making a new todo.
    $("input[type='text']").keypress(function (event) {
        if(event.which === 13) {
           //grab text
           var todoText = $(this).val();
           //check if todoText is not empty
           if(todoText != "") {
                //delete the text and create a new li and add the todo.
                $(this).val("");
                $('ul').prepend("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
           }
           
        }
    });

    //Toggle button
    $(".fa-plus").click(function() {
        $("input[type='text']").fadeToggle();
    });

});