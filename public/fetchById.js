function fetchId(done){
    let id=$('#id')
    let c =id.val()
    console.log(c)
    $.get('/todos/'+c, function(data){
       done(data);  
    })
}

function getTaskByID(){
    let TaskList = $('#TaskList')
    fetchId(function(product){
        TaskList.empty()
        console.log(product)
            TaskList.append(createProductCard(product))
            collapse()
    })
}

