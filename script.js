const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&";
const form = document.querySelector("form");
const btn = document.querySelector('.btn');
const content = document.querySelector("#contenedor");

btn.addEventListener("click",function generador(e){
 const input = document.querySelector("#input");
 e.preventDefault();
 let inputt = Number(input.value);
// Number(valorAConvertir) este metodo vuleve todo valor numerico a numero 
// parseInt te convierte en numero un valor existente si el valor es cero devlvera NaN

// console.log(inputt);
 if(inputt !=0 && inputt < 26){
   form.classList.remove("move");
   function generatePass(){
        let prePass="";
        for(let i = 1; i <= inputt; i++){
            prePass += characters.charAt(Math.floor(Math.random()*characters.length))
        }
        return prePass;
   }
   const password = generatePass();
   content.textContent=`${password}`;
 }else{
   form.classList.add("move");
    alert("Input a Value `That value should be less than 26`");
 }
   form.reset();
})
content.textContent=`Nothing generated`;
