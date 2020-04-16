function showNotes(){
    let TaskList = $('#TaskList')
    fetchNotes(function(product){
        TaskList.empty()
        console.log(product)
            TaskList.append(createNoteCard(product))
    })
}

function fetchNotes(done){
    let notes=$('#id').val()
    $.get('/todos/'+ notes +'/notes', function(data){
       done(data);
    })
}

function createNoteCard(product){
    return $(`<div id=box><b>Notes : ${product[0].Notes}</div>`)
}