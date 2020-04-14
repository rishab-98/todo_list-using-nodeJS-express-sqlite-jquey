function fetchTasks(done){
    $.get('/todos', function(data){
        done(data);

    })
}
$(function(){

    let TaskList = $('#TaskList')
  
    fetchTasks(function(products){
        TaskList.empty()
        for(product of products){
           
            TaskList.append(createProductCard(product))
            
        }
        collapse()
        
    })
    
})

function createProductCard (product){
    return $(`<div class="card text-center">
    <div class="card-header">
        <b>${product.Title}</b>
    </div>
   <div class="card-body">
       <h5 class="card-title">${product.Due_Date}</h5>
       <p class="card-text"><b>Description: </b><i>${product.Description} <i></p>
       <p class="card-text"><b>Priority: </b>${product.Priority}</p><p class="card-text"><b>Status: </b>${product.Status}</p>
    </div>
   <div class="card-footer text-muted">
         <button type="submit"  class="btn btn-primary">Show Notes</button>
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


function collapse(){
    
    var coll = document.getElementsByClassName("btn btn-primary");
    let i;
for (i = 0; i < coll.length; i++) {
    
    coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
         content.style.display = "none";
       } else {
            content.style.display = "block";
           }
    });
}
}






   

  