// Fetch All the Tasks 
function fetchTasks(done){
    $.get('/todos', function(data){
        done(data);
    })
}

//FUnction which will execute with loading of page
$(function(){

    let TaskList = $('#TaskList')

    //Fetch Tasks Function
    fetchTasks(function(products){
        TaskList.empty()
        fetchedData=products;
        console.log(fetchedData)
        sortById(fetchedData)
    })

    // Code for setting default value of Date to Tomorrow
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + 1);
    var tomorrow = currentdate.toJSON().slice(0,10);
    document.getElementById('date').value = tomorrow

    // On click functions for sorting

        $('#b3').click(function()
        {
                sortByPriority(fetchedData)
        })
    
        $('#b2').click(function()
        {
                sortByStatus(fetchedData)
        })
    
        $('#b1').click(function()
        {      
            sortByRecentDate(fetchedData)
        })
        $('#b10').click(function()
        {
            sortByOlderDate(fetchedData)
        })


    })

// This will craete Task Fields according to the number of tasks
function createProductCard (product){
    return $(`<div class="card text-center">
    <div class="card-header">
        <b>Title: ${product.Title}</b>
    </div>
   <div class="card-body">
       <h5 class="card-title">${product.Due_Date}</h5>
       <p class="card-text"><b>Description: </b><i>${product.Description} <i></p>
       <p class="card-text"><b>Priority: </b>${product.Priority}</p><p class="card-text"><b>Status: </b>${product.Status}</p>
    </div>
   <div class="card-footer text-muted">
   <p id="hide">${product.id}</p>
         <button type="submit" class="btn btn-primary">Show Notes</button>
          <div class="display">
          <form>
         
               <b>Notes: </b> <p id="hide">${product.id}</p><p>${product.Notes}
              </p>
              
                   Add Notes: <input class="input" type="text" >
                  <button  type="button"   class="updateNotes">Submit</button>
              </form>
             
          </div>
  </div>

</div><br><hr><br>`)
}

// This function will expand and hide Notes of each Task
function collapsible(){

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






   

  