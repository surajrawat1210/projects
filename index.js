
 var list=[];
 var alarmItems=document.querySelectorAll(".alarm-items button");
//set alarm details in alaram-items 

 function alarmlist(time){
    var div=document.createElement("div");
    var p=document.createElement("p");
    var btn=document.createElement("button");
    const ptext=document.createTextNode(time);
    const btntext=document.createTextNode("Delete");
    p.appendChild(ptext);
    p.setAttribute("class","heading bold");
    btn.appendChild(btntext);
    btn.setAttribute("class","alarm-items-btn btn btn-dark btn-sm");
    div.appendChild(p);
    div.appendChild(btn);
    div.setAttribute("class","alarm-items")
    console.log(div);
    var element=document.getElementById("list-items");
    console.log(element);
    element.appendChild(div);
    alarmItems=document.querySelectorAll(".alarm-items button");
}

//set alarm time
var setAlarm=document.getElementById("set-alarm1");
setAlarm.addEventListener("click",function()
{
    var hour=document.getElementById("hour").value;
    var min=document.getElementById("min").value;
    var sec=document.getElementById("sec").value;
    
    var time= document.getElementById('time').selectedOptions[0].value;
    if((hour.length>2 ||min.length>2 || sec.length>2)||(parseInt(hour)==0 ||parseInt(sec)>=60 ||parseInt(min)>=60) || (parseInt(hour)>12 && (parseInt(sec)!=0 ||parseInt(min)!=0)) ||(parseInt(hour)==0 && parseInt(min)==0 && parseInt(sec)==0) ||(parseInt(hour)<0 ||parseInt(sec)<0 ||parseInt(sec)<0 ))
    {
        alert("your input is wrong");
        document.getElementById("hour").value="00";
        document.getElementById("min").value="00";
        document.getElementById("sec").value="00";  
       
        return;
    }
    list.push({"hour":parseInt(hour),"min":parseInt(min),"sec":parseInt(sec),"time":time});
    // console.log("l"+list);

    document.getElementById("hour").value="00";
    document.getElementById("min").value="00";
    document.getElementById("sec").value="00";
    var time=hour+":"+min+":"+sec+":"+time;
    // console.log(time);
    alarmlist(time);
   
});


var first,second,third;
var id=setInterval(function (){
    
    for(var i=0;i<alarmItems.length;i++)
      {   
    alarmItems[i].addEventListener("click",function()
    {
        console.log("clicked");
        //remove the parement element from alarm items;
        (this).parentElement.remove();
        //update the alarmItems;
        alarmItems=document.querySelectorAll(".alarm-items button");
    })  ;
}


    var d=new Date();
    var hr=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var time="AM";
    
    if(hr>=12)
    {
        if(hr!=12)
        {
            hr=hr-12;
        }                
        time="PM";
    }
    var e=document.getElementById("header");
    var f=document.getElementById("list-items");
        //if the list of alarms contain 0 element hide the header .
    if(f.offsetHeight==0)
    {
        e.style.visibility="hidden";
    }
    else
    {
        e.style.visibility="visible";
    }
    var display=document.getElementsByClassName("current-time")[0];
    var hour1=hr.toString(),min1=min.toString(),sec1=sec.toString();
    
    //appliying validation so that it could be in form of 00:00:00 
    
    if(hr<10)
    {
        hour1="0"+hr;
    }
    if(min<10)
    {
        min1="0"+min;
    }
    if(sec<10)
    {
        sec1="0"+sec;
    }
    // console.log(hour1,"_",min1,"_",sec1);
    display.innerHTML=hour1+":"+min1+":"+sec1+":"+time;
    // console.log("hell0"+hr+":"+min+":"+sec+":"+time)
    // console.log(list);

    //checking if current time equal to any time in alarm list

    for(var i=0;i<list.length;i++)
    {
        // console.log("list"+":"+list[i].hour+":"+list[i].min+":"+list[i].sec+":"+list[i].time);
        if(list[i].hour==hr && list[i].min==min && list[i].sec==sec && list[i].time==time)
        {
            console.log("equal");
            let i=0;
            alert("time is going on ");
        }
    }


},1000);

