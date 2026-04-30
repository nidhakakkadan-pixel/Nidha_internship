const taskinput=document.getElementById('task-input');
const addbtn=document.getElementById('add-btn');
const tasklist=document.getElementById('task-list');

addbtn.addEventListener('click', function(){
    if(taskinput.value!==""){
        const tasktext=taskinput.value;
        const listitem= document.createElement("li");
                              
                              
        listitem.innerHTML=tasktext+' <button class="delete-btn">delete</button>';
                                    
                                
                                
        tasklist.appendChild(listitem);
        taskinput.value="";                        
    }
});


tasklist.addEventListener('click', function(event){
        if (event.target.classList.contains("delete-btn")){
            event.target.parentElement.remove();
            

    }
});