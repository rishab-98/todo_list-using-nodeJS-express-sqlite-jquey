
$(function(){
    let title=$('#title')
    let description=$('#description')
    let date=$('#date')
    let priority=$('#priority')
    //let status =$('#status')
    console.log("dgvj")
console.log(priority.val())
if(priority.val()===null){
    console.log("gdjhHJWJ")
}
if(description.val()===null){
    console.log("huuuu")
    description.val()="null"
}
    $('#simple').click(function(){
   
        sendTasks( title.val(), description.val(), date.val(), priority.val())
       
    })

})

function sendTasks(Title, Description, Due_Date,Priority ){
 
    $.post('/todos', {
        title: Title,
        
        description: Description,
        date: Due_Date,
        priority:Priority,
       
    }, function(data){
        done(data)
    })
}