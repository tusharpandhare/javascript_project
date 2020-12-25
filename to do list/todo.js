var  selet_current_item;
	//all filter 
	function viewall(){
	var access_alltable=document.getElementById("mytable").getElementsByTagName("tbody")[0].children;
	//console.log(access_alltable);
	for(var i=0;i<access_alltable.length;i++)
	{
		access_alltable[i].style.visibility="visible";
		access_alltable[i].style.position="relative";
	}

    }
    // complete filter
    function viewcomplete(){
    	var access_completetable=document.getElementById("mytable").getElementsByTagName("tbody")[0].children;
    		for(var i=0;i<access_completetable.length;i++)
    		{
    			//console.log(access_completetable[i].firstElementChild.childNodes);
    			var z=access_completetable[i].style.backgroundColor;
    			if(z=="gray")
    			{
    				access_completetable[i].style.visibility="visible";
    				access_completetable[i].style.position="relative";
    			}
    			else
    			{
    				access_completetable[i].style.visibility="hidden";
    				access_completetable[i].style.position="absolute";
    			}
    		}
    }
    // incomplete filter
    function viewincomplete(){
    	var access_incompletetable=document.getElementById("mytable").getElementsByTagName("tbody")[0].children;
    		for(var i=0;i<access_incompletetable.length;i++)
    		{
    			//console.log(access_completetable[i].firstElementChild.childNodes);
    			var z=access_incompletetable[i].style.backgroundColor;
    			if(z=="gray")
    			{
    				access_incompletetable[i].style.visibility="hidden";
    				access_incompletetable[i].style.position="absolute";
    				console.log(access_incompletetable[i].firstElementChild.childNodes)
    				access_incompletetable[i].style.zIndex="-1";
    				
    			}
    			else
    			{
    				access_incompletetable[i].style.visibility="visible";
    				access_incompletetable[i].style.position="relative";
    			}
    		}
    }

	//search the inputed reminder
	function searchme(){
		var get_text=document.getElementById("search_text").value;
		var access_table=document.getElementById("mytable").getElementsByTagName("tbody")[0].children;
		console.log(access_table.length);
		for(var i=0;i<access_table.length;i++)
		{
			 var iter=access_table[i].firstElementChild.nextElementSibling.textContent;
				//console.log(iter);
					var n=iter.search(get_text);
				if(n>=0)
				{
					access_table[i].style.visibility="visible";
				}
				else{
					access_table[i].style.visibility="hidden";
					access_table[i].style.position="absolute";
				}
				console.log(n);
		}

	}


	// view the reminders date time and description
	function viewme(e)
	{
		var viewer=e.parentElement.previousElementSibling.previousElementSibling.childNodes;
		alert("description :"+viewer[1].textContent+"\n Date :"+viewer[2].textContent+"\n Time:"+viewer[3].textContent);
		//console.log(e.parentElement.previousElementSibling.childNodes);
	}
	//update the reminder items
	function updateme(e){
		var get_old_details=e.parentElement.previousElementSibling.childNodes;
	console.log(e.parentElement.previousElementSibling.previousElementSibling.childNodes);
	var name=get_old_details[0];
	var a=get_old_details[1];
	var b=get_old_details[2];
	var c=get_old_details[3];
	for(var i=1;i<=3;i++)
	{
		get_old_details[i].textContent=prompt("description :",get_old_details[i].textContent);
	}
	}


	//saving data inside do to item like description, date ,time etc
	function setall(){
		document.getElementById("filter").style.visibility="visible";
		//console.log(selet_current_item.parentElement.nextElementSibling);
		var time=document.getElementById("time").value;
		var description=document.getElementById("description").value;
		var date=document.getElementById("date").value;
		if(time!==""||description!==""||date!=="")
		{
			var x=window.confirm("Description :"+description+" date:"+date+" time:"+time);
			if(x==true){
		console.log(selet_current_item)
		selet_current_item.parentNode.previousElementSibling.childNodes[1].textContent=description;
		selet_current_item.parentNode.previousElementSibling.childNodes[2].textContent=date;
		selet_current_item.parentNode.previousElementSibling.childNodes[3].textContent=time;
		var form=document.getElementById("todoform");
	form.style.visibility="hidden";
	var table=document.getElementById("mytable");
	table.style.visibility="visible";
	var hideadd=document.getElementById("additem");
	hideadd.style.display="block";
	selet_current_item.parentElement.parentElement.style.backgroundColor="gray";
	selet_current_item.parentElement.parentElement.style.color="white";
	selet_current_item.parentElement.previousElementSibling.previousElementSibling.firstElementChild.style.visibility="visible";
	selet_current_item.parentElement.previousElementSibling.previousElementSibling.firstElementChild.style.color="green !important";

		//var old_of_view=selet_current_item.parentElement;
		var parent_for_update=selet_current_item.parentElement;
		var parent_for_view=selet_current_item.parentElement.nextElementSibling;
		parent_for_view.removeChild(parent_for_view.childNodes[0]);
		parent_for_view.innerHTML='<button id="view" onclick="viewme(this);" class="btn">View</button></td>';
		parent_for_update.removeChild(parent_for_update.childNodes[0]);
		parent_for_update.innerHTML='<button id="update" onclick="updateme(this);" class="btn">Update</button></td>';
	//console.log(selet_current_item.parentElement);

	
			}
		}
		else{
			alert("please fill up all fields");
		}


		//console.log(selet_current_item.parentNode.previousElementSibling.childNodes);
		
		
	}
	//disabling the checkbox when task is incomplete
	
	//deleting row from to do list
	function deleteme(e){
	e.parentNode.parentElement.remove();
		
	}
	//adding new item in the list
function additem(){
	var new_item=document.getElementById("addtext").value;
	var get_table=document.getElementById("mytable");
	console.log(get_table);
	if(new_item=="")
	{
		alert("please enter task to do.");
	}
	else{
		var addrow=get_table.insertRow(-1);
		addrow.insertCell().innerHTML="<td><input type='checkbox' checked id='complete' disabled></td> ";
		//addrow.insertCell().textContent=new_item;
		addrow.insertCell().innerHTML="<td class='todo_item'>"+new_item+"<span id='description_set'></span><span id='date_set'></span><span id='time_set'></span></td>"
		addrow.insertCell().innerHTML="<td><button id='edit' onclick='edit(this);'class='btn'><i class='fa fa-edit'></i></button></td> ";
		addrow.insertCell().innerHTML="<td><button id='delete' onclick='deleteme(this);' class='btn'>Delete</button></td>";
		new_item="";
		document.getElementById("addtext").value=null;
	}
}

//edit info function
function edit(e){
	 selet_current_item=e;

	var gettask=e.parentElement.previousElementSibling.textContent;
	//console.log(gettask);
	//console.log(gettask);
	var settasktitle=document.getElementById("tasktitle").textContent="reminder for "+gettask;

	//console.log(gettask);
	document.getElementById("filter").style.visibility="hidden";
	var form=document.getElementById("todoform");
	form.style.visibility="visible";
	var table=document.getElementById("mytable");
	table.style.visibility="hidden";
	//hiding the add item 
	var hideadd=document.getElementById("additem");
	hideadd.style.display="none";
	form.childNodes[1].childNodes[3].value="";
	form.childNodes[1].childNodes[6].value="";
	form.childNodes[1].childNodes[9].value="";
}
//go back to main page
function backme(){
	var form=document.getElementById("todoform");
	form.style.visibility="hidden";
	var table=document.getElementById("mytable");
	table.style.visibility="visible";
	var hideadd=document.getElementById("additem");
	hideadd.style.display="block";
	document.getElementById("filter").style.visibility="visible";
}