const inputNumberEmail = document.querySelector(".input-number-email");
const acceptButton = document.querySelector(".accept-button");

// const inputAccount = (e) => {
//   let inputValue = e.target.value;
//   console.log(inputValue.length);

//   //    else if (inputValue > 11) {
//   //     return alert("لطفا شماره تلفن خود را درست وارد نمایید ");
//   //   }
// };
let array = [];
// const interAccount = (e) => {
//     let inputValue = e.target.value;
  
//     if(inputValue.length == 11 ){ 

//             array.push(inputValue);
//             localStorage.setItem("array" , array)
//             alert("خوش امدید")
//             // console.log(array)
//     }
    
// }
// inputNumberEmail.addEventListener("change", interAccount);
    
acceptButton.addEventListener("click", (e) => {
    e.preventDefault();
     let inputValue = inputNumberEmail.value;

          if(inputValue.length == 11){
                 array.push(inputValue);
                localStorage.setItem("array" , array);
    }else{
                 return alert("لطفا شماره تماس درست را وارد نمایید")
    }
    if(array.map((item) => item === inputValue )){

            array.pop()
        }
});
