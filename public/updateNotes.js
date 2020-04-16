
function updateNote(){
var show = document.getElementsByClassName("updateNotes") 

let i;
for (i = 0; i < show.length; i++) {

   show[i].addEventListener("click", function() {
       var input=this.previousElementSibling;
       var note= input.previousElementSibling;
       var id= note.previousElementSibling;
      var ID = id.innerHTML
      var finalNote
     
       finalNote=note.innerHTML + " " + input.value
       console.log(note.innerHTML)
       var ans=note.innerHTML
       console.log("ans= "+ ans)
       if(ans==null)
       {
        sendUpdatedNote(ID, input.value)
       }else{
        sendUpdatedNote(ID, finalNote)
       }
        
        window.alert("Note updated")
    })
}
}

function sendUpdatedNote(id, finalNote){
    console.log(finalNote)
    var item={
 notes:finalNote
    }
        return $.ajax({
            type: "Patch",
            url: "/todos/"+id + "/notes",
            data: JSON.stringify(item),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
    }


