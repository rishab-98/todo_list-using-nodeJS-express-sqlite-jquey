
$(function(){
    let title=$('#title')
    let description=$('#description')
    let date=$('#date')
    let priority=$('#priority')
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
    window.alert("Data Sent Successfully!")
}