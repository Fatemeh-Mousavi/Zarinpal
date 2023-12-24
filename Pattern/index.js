const cardGetNumberOrEmailBody = document.querySelector(".cardGetNumberOrEmailBody");
const cardSmsPasswordBody = document.querySelector(".cardSmsPasswordBody"
);
const resendField = document.querySelector("#resendField");
const timeProgress = document.querySelector("#timeProgress");
const sendSMS = document.querySelector(".sendSMS");
cardGetNumberOrEmailBody.style.display = "none";

let t = 0 ,
s, 
m, 
timerInterval;
const startTimer = (e) => {
    t = 10000; 
    timeProgress.style.display = "flex";
    timeProgress.max = t / 1000;
    // resendField.innerText = ` ${getTime()} تا ارسال مجدد کد `;
    resendField.classList.add("disabled");
    e.preventDefalute()
}


 timerInterval = setInterval(() =>{
    t -= 1000;
    resendField.innerText = ` ${getTime()} تا ارسال مجدد کد `;
    timeProgress.value = t / 1000;
    if(t === 0){
        clearInterval(timerInterval);
        resendField.innerText = "ارسال کد به صورت پیامک ";
        resendField.classList.remove("disabled");
        timeProgress.style.display = "none";
        
    }
    
 } ,1000)
const getTime = () => {
    m = (Math.floor(t /60000)).toString();
    s = (Math.floor((t % 60000) / 1000)).toString();
    return `${s.padStart(2 , 0)} : ${m.padStart(2 , 0)}`;
}
startTimer();
