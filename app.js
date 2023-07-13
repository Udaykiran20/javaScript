
function condition(){
    document.write('hello')
}
function joined(){
    let tittle= document.getElementById('tittle');
    tittle.innerText='Thanks for Joining'
    let btn = document.getElementById('btn')
        btn.style.display='none'
}
function verify(){

    let age=document.getElementById('age')
    let tittle= document.getElementById('title');
    let vote_btn=document.getElementById('vote_btn').style.display='none'

    let input=document.getElementById('age').style.display='none'

    if(age.value>=18){
        title.innerText='You are Eligible to Vote'
    }
    else{
        title.innerText='You are Not Eligible to Vote yet'
    }
}

function convert(){
    let One_doller=74.45;
    let doller=document.getElementById('dollers')
    doller.style.display='none'
    let convert_btn=document.getElementById('convert_btn').style.display='none'
    console.log((doller.value*One_doller)+' Indian Rupees')
    let result=document.getElementById('result')
    result.innerText=(doller.value*One_doller)+' Indian Rupees'
    

}
function table(){

    let number=document.getElementById('number')
   
    
    let box=document.getElementById('box')
    let table_btn=document.getElementById('table_btn').style.display='none'
    let heading=document.getElementById('heading').innerText='The Multiples of '+number.value+' are '

    let input=document.getElementById('number').style.display='none'
    if(box.innerHTML.length !=0){
        box.innerHTML=" "
    }
    let add;  
    
    for(let i=1;i<=10;i++)
    {
        add=box.innerHTML;
        console.log(number.value+' x '+i+' = '+(number.value*i))
        add +=(number.value+' x '+i+' = '+(number.value*i)+' , ')
        box.innerText=add
        
    }
    
}