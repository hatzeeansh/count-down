console.log('welcome to app.js')




let currentdate=localStorage.getItem('CurrentTime');
let inputdate=localStorage.getItem('InputTime');

let h2=document.getElementsByTagName('h2')[0];
console.log(h2)



// const endDate="14 April 2023 8:07:30"

var startDate = inputdate;
    var convertedStartDate = new Date(startDate);
    var month = convertedStartDate.getMonth() + 1
    var day = convertedStartDate.getDay();
    var year = convertedStartDate.getFullYear();
    var shortStartDate = month + "/" + day + "/" + year;
document.getElementById('end-date').innerText=shortStartDate; 
 let input =document.querySelectorAll('input');
let stop=false;
clock();
function clock()
{
    const end= new Date(inputdate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(end,now,diff)
    if(diff<=1)
    {
        stop=true;
        let success= document.createElement('div');
        success.className='success-msg'
        success.appendChild(document.createTextNode('Congrats your Timer is completed'))
        let h2=document.getElementsByTagName('h2')[0];
        let container=document.querySelector('.container');
        container.insertBefore(success,h2);

        setTimeout(()=>{
            container.removeChild(success)
            location.href='/home.html'
        },3000)

    }
    let days=Math.floor(diff/3600/24)
    console.log(days)
    input[0].value=days; 
    let hour= Math.floor((diff/3600)%24);
    console.log(hour)
    input[1].value=hour
    let mins=Math.floor((diff/60)%60);
    console.log(mins)
    input[2].value=mins;
    input[3].value=Math.floor(diff)%60;

}


setInterval(()=>{
    if(!stop)
    {
        clock();
    }
    else
    {
        clearInterval();
    }
},1000)



