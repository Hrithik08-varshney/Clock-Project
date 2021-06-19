
const btn_2=document.querySelector('.btn-2');
const hrs=document.querySelector('.hrs');
const min=document.querySelector('.minute');
const sec=document.querySelector('.seconds');
const btn=document.querySelector('.btn');
btn_2.addEventListener("click",function(){
    const time_in_hrs=document.getElementById('in-hrs').value;
    const time_in_min=document.getElementById('in-min').value;
    const time_in_sec=document.getElementById('in-sec').value;
    hrs.style.transform=`rotate(${time_in_hrs*30}deg)`;
    min.style.transform=`rotate(${time_in_min*6}deg)`;
    sec.style.transform=`rotate(${time_in_sec*6}deg)`;
})
btn.addEventListener("click",function(){
    const time_in_hrs=document.getElementById('in-hrs').value;
    const time_in_min=document.getElementById('in-min').value;
    const time_in_sec=document.getElementById('in-sec').value;
    var rotate_hrs=(time_in_hrs*30);
    var rotate_min=(time_in_min*6);
    var rotate_sec=(time_in_sec*6);
    const seconds=()=>{
    setTimeout(()=>{
    rotate_sec=rotate_sec+6;
    sec.style.transform=`rotate(${rotate_sec}deg)`;
    if(rotate_sec==360){
        rotate_sec=0;
        sec.style.transform=`rotate(${rotate_sec}deg)`;
        rotate_min=rotate_min+6;
        min.style.transform=`rotate(${rotate_min}deg)`;
        if(rotate_min==360){
            {
                rotate_min=0;
                min.style.transform=`rotate(${rotate_min}deg)`;
                rotate_hrs=rotate_hrs+30;
                hrs.style.transform=`rotate(${rotate_hrs}deg)`;
                if(rotate_hrs==360){
                    rotate_hrs=0;
                }
            }
        }
    }
    },1000)
    }
    setInterval(seconds,1000);
})
