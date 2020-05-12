//to check the list items and put line throung them
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
})

//click on D to delete the li
$("ul").on("click","span",function(event){
$(this).parent().fadeOut();(500,function(){
$(this).remove();
});

event.stopPropagation(); 
    
})
// to add a key press event to the input 
let add=function(){
    $("input[type='text']").keypress(function(event){
        if(event.which===13){
            // to take new to do text from user
          let req= $(this).val();
            
          
          //to remove the previous to do from input bar and make space for new todos
            $(this).val(" ");
    
          //creat a new li and add to ul
          $("ul").append("<li><span><i class='fa fa-minus'></i></span>"+ req+"</li>");
        }
      
    })
}
add();


//to add the functionality to the add button
$(".fa-plus-circle").click(function(){

    //if the input entered by the user is none then add sign will hide the input bar
    if( $("input[type='text']").val()===""){
        $("input[type='text']").fadeToggle();
    }
    else if( $("input[type='text']").val()===" "){
        $("input[type='text']").fadeToggle();
    }
    else{
 // to add the written text to the list after clicking the add button
 $("ul").append("<li><span><i class='fa fa-minus'></i></span>"+$("input[type='text']").val()+"</li>");
 $("input[type='text']").val(" ");
    }
  
})