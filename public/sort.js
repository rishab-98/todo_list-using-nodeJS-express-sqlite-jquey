function sortByPriority(fetchTasks)
{
    let taskList=$('#TaskList')
    fetchTasks.sort(function(a,b)
    {
      
      taskList.empty()
      apriority=a.priority.toLowerCase()
      bpriority=b.priority.toLowerCase()
      return ((apriority=='high') ? 1 : (bpriority=='high') ? -1 : 0);
       
    })
    for(task of fetchedData)
    {
          taskList.append(createProductCard(task))
    }
    
   
} 

function sortById(fetchedData)
{
    let taskList=$('#taskList')
    taskList.empty()
    for(task of fetchedData)
    {
       taskList.append(showNewTask(task))
    }
    
}


// function sortByStatus(fetchedData)
// {
//     let taskList=$('#taskList')
//     fetchedData.sort(function(a,b)
//     {
      
      
//       astatus=a.status.toLowerCase()
//       bstatus=b.status.toLowerCase()
//       return ((astatus=='incomplete') ? -1 : (bstatus=='incomplete') ? 1 : 0);
       
//     })
//     taskList.empty()
//     for(task of fetchedData)
//     {
//           taskList.append(showNewTask(task))
//     }
    
   
// } 

function sortByStatus(fetchedData)
{
    let taskList=$('#taskList')
    fetchedData.sort(function(a,b)
    {
      
      
      astatus=a.status.toLowerCase()
      bstatus=b.status.toLowerCase()
      return ((astatus=='incomplete') ? -1 : (bstatus=='incomplete') ? 1 : 0);
       
    })
    taskList.empty()
    for(task of fetchedData)
    {
          taskList.append(showNewTask(task))
    }
    
   
} 


function sortByNewer(fetchedData)
{
    let taskList=$('#taskList')
    fetchedData.sort(function(a,b)
    {
      return new Date(a.date) - new Date(b.date);
       
    })
    taskList.empty()
    for(task of fetchedData)
    {
          taskList.append(showNewTask(task))
    }
    
   
} 


function sortByOlder(fetchedData)
{
  let taskList=$('#taskList')
  fetchedData.sort(function(a,b)
  {
    return new Date(b.date) - new Date(a.date);
     
  })
  taskList.empty()
  for(task of fetchedData)
  {
        taskList.append(showNewTask(task))
  }
    
   
} 