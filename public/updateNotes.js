    //fetch notes
    //concatinate them 
    // post notes

function addNotes(){
    console.log(notes)
    var x= $("#enterNote").val()

var z = document.getElementById("notes").innerHTML
  console.log(z)
   console.log(x)
     document.getElementById("notes").innerHTML=z+" "+x
     var note=z+" "+x
     var id= document.getElementById("hide").innerHTML
   
     sendNewNote(id,note)
        window.alert("updated successfully!")
}                                 

function sendNewNote(id, notes){
    var item={
 notes:notes
    }
        return $.ajax({
            type: "Patch",
            url: "/todos/"+id+"/notes",
            data: JSON.stringify(item),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
    }
  