function updateTask(){
    let area = $('#updateArea')
    fetchById(function(product){
        area.empty()
        console.log(product)
            area.append(createUpdateArea(product))
    })
}

function fetchById(done){
    let id=$('#id')
    var c =id.val()
    console.log(c)
    $.get('/todos/'+c, function(data){
       done(data);
    })
}
function createUpdateArea(product){
    return $(`<div class="card text-center">
    <div class="card-header">
        <b>${product.Title}</b>
    </div>
   <div class="card-body">
       <h5 class="card-title"><b>Update Due Date: <input type="date" id="dueDate"></h5>
       <p class="card-text"><b>Description: </b><i>${product.Description} <i></p>
       <p class="card-text"><b>Update Priority: </b><input type="text" id="pri"></p>
       <p class="card-text"><b>Update Status: </b> 
        <input type="radio" id="completed" name="updateStatus" value="completed">
       <label for="competed">Completed</label>
       <input type="radio" id="incomplete" name="updateStatus" value="incomplete">
       <label for="incomplete">Incomplete</label><br></p>
       <button type="button" onclick="updateListItem()" id="b6" class="btn btn-outline-primary btn-sm">Update</button>
    </div>
   <div class="card-footer text-muted">
         <button type="submit" class="btn btn-primary">Show Notes</button>
          <div class="display">
               <p class="notes">${product.Notes}
              </p>
              <form>
                   Add Notes: <input type="text" class="text">
                  <button type="submit" class="btn btn-outline-primary">Submit</button>
              </form>
          </div>
  </div>
</div><br><hr>`)
}

function updateListItem(){
    console.log("cvvdJVJ")
    let date=$('#dueDate').val()
    console.log(date)
    let priority=$('#pri').val()
    console.log(priority)
    let id=$('#id')
    var c =id.val()
    var ele = document.getElementsByName('updateStatus'); 
     var status;
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                status=ele[i].value;
            } 
            console.log(status)
        sendUpdatedValue(c,date, priority, status)
        window.alert("updated successfully!")
}

function sendUpdatedValue(id, date, priority, status){
    var item={
        date:date,
        status:status,
        priority:priority,
    }
        return $.ajax({
            type: "Patch",
            url: "/todos/"+id,
            data: JSON.stringify(item),
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
    }

  
