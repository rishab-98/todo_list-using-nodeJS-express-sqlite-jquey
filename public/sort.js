function sortById(fetchedData)
{
  console.log(fetchedData)
    let taskList=$('#TaskList')
    taskList.empty()
    for(task of fetchedData)
    {
       taskList.append(createProductCard(task))
    }
    collapsible()
    updateNote()
}


function sortByStatus(fetchedData)
{ console.log("status")
    let TaskList=$('#TaskList')
    fetchedData.sort(function(a,b)
    {
      astatus=a.Status.toLowerCase()
      bstatus=b.Status.toLowerCase()
      return ((astatus=='incomplete') ? -1 : (bstatus=='incomplete') ? 1 : 0);
       
    })
    TaskList.empty()
    for(task of fetchedData)
    {
          TaskList.append(createProductCard(task))
    }
    collapsible()
    updateNote()

   
} 

function sortByPriority(fetchedData)
{
    let taskList=$('#TaskList')
    fetchedData.sort(function(a,b)
        {
          
       taskList.empty()
         apriority=a.Priority.toLowerCase()
       bpriority=b.Priority.toLowerCase()
       return ((apriority=='high') ? -1 : (bpriority=='high') ? 1 : 0);
           
         })
    fetchedData.sort(function(a,b)
    {
      
      
      apriority=a.Priority.toLowerCase()
      bpriority=b.Priority.toLowerCase()
     
      return ((apriority=='medium' && bpriority=='low') ? 1 : (bpriority=='medium' && apriority=='low')  ? -1 : 0);
       
    })
    taskList.empty()
    for(task of fetchedData)
    {
          taskList.append(createProductCard(task))
    }
    
    collapsible()
    updateNote()
} 


function sortByNewer(fetchedData)
{
    let taskList=$('#TaskList')
    fetchedData.sort(function(a,b)
    {
      return new Date(a.Due_Date) - new Date(b.Due_Date);
       
    })
    taskList.empty()
    for(task of fetchedData)
    {
          taskList.append(createProductCard(task))
    }
    collapsible()
    updateNote()
   
} 


function sortByOlder(fetchedData)
{
  let taskList=$('#TaskList')
  fetchedData.sort(function(a,b)
  {
    return new Date(b.Due_Date) - new Date(a.Due_Date);
     
  })
  taskList.empty()
  for(task of fetchedData)
  {
        taskList.append(createProductCard(task))
  }
  collapsible()
  updateNote()
   
} 