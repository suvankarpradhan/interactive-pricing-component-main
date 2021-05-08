const slider = document.getElementById('priceRange');
var views = document.getElementById('view');
var price = document.getElementById('price');
var yearPlan = document.getElementById('yearPlan');
yearPlan.onclick = ()=>{
       checkRange(); 
}
slider.oninput = ()=>{
    checkRange();
}
function checkRange(){
        var range = slider.value;
    if(range>=0 && range<20){    
            views.innerHTML = " 10K ";
            (yearPlan.checked == false)?price.innerHTML = " $8.00 ":price.innerHTML = "$"+(8.00*0.75)+".00 ";
    }else if(range>=20 && range<40){
            views.innerHTML = " 50K ";
            (yearPlan.checked == false)?price.innerHTML = " $12.00 ":price.innerHTML = "$"+(12.0*0.75)+".00 ";
    }else if(range>=40 && range<60){
            views.innerHTML = " 100K ";
            (yearPlan.checked == false)?price.innerHTML = " $16.00 ":price.innerHTML = "$"+(16.0*0.75)+".00 ";
    }else if(range>=60 && range<80){
            views.innerHTML = " 500k ";
            (yearPlan.checked == false)?price.innerHTML = " $24.00 ":price.innerHTML = "$"+(24.0*0.75)+".00 ";
    }else{
            views.innerHTML = " 1M ";
            (yearPlan.checked == false)?price.innerHTML = " $36.00 ":price.innerHTML = "$"+(36.00*0.75)+".00 ";            
    }
    slider.style.background = 'linear-gradient(90deg,hsl(174, 77%, 80%) '+range+'%,hsl(224, 65%, 95%) '+(range-slider.min)+'%)';
}
