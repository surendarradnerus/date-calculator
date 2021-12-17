var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="display data";
button.className="btn btn-primary";
button.setAttribute("type",'button');
button.addEventListener('click',displaydata);
document.body.append(button);

var p=document.createElement('p');
var br=document.createElement('br');
document.body.append(p);

function displaydata(){
    let input=new Date(document.getElementById("date").value)
    if(Date.parse(input)){
        var inputdate=new Date(input);
        var currentdate=new Date();
        var milliesecdiff=currentdate.getTime()-inputdate.getTime();
        console.log(milliesecdiff +"" + "millisecond");

        var secondsdiff=Math.floor(milliesecdiff/1000)
        console.log(secondsdiff  +"" + "seconds");

        var minitusdiff=Math.floor(secondsdiff/60)
        console.log(minitusdiff  +"" + "minitues");
        
        var hoursdiffer=Math.floor(minitusdiff/60)
        console.log(hoursdiffer  +"" + "hours");

        var daysdiff=Math.floor(hoursdiffer/24)
        console.log(daysdiff  +"" + "days");

        var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
            console.log(yeardiff  +"" + "years");

        var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
        console.log(monthdiff  +"" + "months");

        var data=`Given Input Date is ${input} <br> Year ${yeardiff} <br> Month ${monthdiff} <br> Day ${daysdiff} <br> hours ${hoursdiffer}<br> Minutes ${minitusdiff} <br> seconds ${secondsdiff} <br> Milliseconds ${milliesecdiff}`;
    document.querySelector('p').innerHTML=data;
 


    }
}

