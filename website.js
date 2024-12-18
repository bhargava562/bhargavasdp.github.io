let n1 = document.querySelector('.cross');
let n2 = document.querySelector('.cont');
n1.addEventListener('click',()=> {
    n2.classList.toggle('cont1');
})

let im = ["1","2","3","4","5"];
let im1=document.querySelector(".tswt");
let btn1=document.querySelectorAll(".button");
let count=0;
btn1.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    
   if(btn.classList.contains('left'))
   {
        count--;
        if(count<0)
        {
            count=im.length-1;
        }
        im1.style.background= `url(${im[count]}.jpg) center/cover no-repeat`;
   }
   else {
        ++count;
        if(count==im.length)
        {
            count=0;
        }
        im1.style.background= `url(${im[count]}.jpg)  center/cover no-repeat`;
   }
  })
})
//login page
let cr1 = document.querySelector('#crs1');
let su1 = document.querySelector('#si');
let su2 = document.querySelector('.login');
let br1 = document.querySelector('.half1');
su1.addEventListener('click',()=>
{
//ifelse to change the style when it is clicked
    if(su2.style.display=='none')
    {
        su2.style.display = 'block';
        br1.style.background = 'linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.7))';
    }
    else {
        su2.style.display = 'none';
        br1.style.background = 'linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.3))';
    }
})

cr1.addEventListener('click',()=>{
    su2.style.display = 'none';
    br1.style.background = 'linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.3))';
})
//show/hidepass
let pn1 = document.getElementById("sp");
 let pn2=document.getElementById("password");
 pn1.addEventListener('click',()=>
 {
     if(pn2.type==="password")
     {
         pn2.type="text";
         pn1.className = "fas fa-eye-slash";
     }
     else {
         pn2.type="password";
         pn1.className = "fas fa-eye";
     }
 })
 let id = (id)=>document.getElementById(id);
 let classes = (classes)=>document.getElementsByClassName(classes); 
 let username= id("username"),
     Email= id("Email"),
 password= id("password"),
 form= id("form"),
 errormsg = classes("error");
 
 form.addEventListener("submit",(e)=>
 {
     e.preventDefault();
     engine(username,0,"Invalid username");
     engine(Email,1,"Invalid Email");
     engine(password,2,"Invalid Password");
 })
 let engine = (id,serial,msg)=>{
     if(id.value.trim()==="")
     {
         errormsg[serial].innerHTML = msg;
         id.style.border="2px solid red";
         id.setAttribute("class","er");
 
     }
     else {
         errormsg[serial].innerHTML = "";
         id.style.border="2px solid green"
         //closes after 2 seconds
         setTimeout(() => {
            su2.style.display = 'none';
            br1.style.background = 'linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.3))';
         }, 2000);

     }
 }
//response

let r = document.querySelector('#sub');
r.addEventListener('click',()=>
{
    let names = document.getElementById('name').value;
    if(document.getElementById('mail').value!="" && document.getElementById('msg').value!="")
    {
    document.getElementById('disp').innerHTML = `Thank You, ${names} ,for your Response`;
    }
    else {
        document.getElementById('disp').innerHTML = "Please Fill and Submit";
    }
})
