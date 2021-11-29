let codee =document.getElementById("codee");
let play =document.getElementById("play");
let remove=document.getElementById("remove");
let result=document.getElementById("result");

play.onclick =()=>{ result.innerHTML= codee.value;
   localStorage.setItem("result,codee.Value")

};
remove.onclick = () =>{result.innerHTML="";
            
};
onload =()=>{codee.Value= localStorage.setItem("result")

};