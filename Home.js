console.log('home.js file')


console.log(document.querySelector('.start'))

document.querySelector('.start').addEventListener('click',(e)=>{

    console.log('entered')

e.preventDefault();
let inputdate=document.getElementById('input-date');
let ipdate=new Date(inputdate.value)
let currentdate= new Date();
console.log(ipdate,currentdate)
if(ipdate<currentdate)
{

    let notification=document.createElement('div');
    notification.className='notification-class'
    let text="Please Enter Date Time Greater then Current Date Time"
    notification.appendChild(document.createTextNode(text));
    let container= document.querySelector('.container');
    let label=document.getElementsByTagName('label')[0];
    container.insertBefore(notification,label);
    setTimeout(()=>{
        container.removeChild(notification)
    },2000)

}
else
{
    localStorage.setItem("CurrentTime", currentdate);
    localStorage.setItem("InputTime",ipdate);
    location.href='/index.html'
}
})




