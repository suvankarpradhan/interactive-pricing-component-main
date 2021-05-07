const slider = document.getElementById('priceRange');
var views = document.getElementById('view');
var price = document.getElementById('price');
slider.oninput = ()=>{
    var range = slider.value;
    if(range>=0 && range<20){    
            views.innerHTML = " 10K ";
            price.innerHTML = " $8.00 ";
    }else if(range>=20 && range<40){
            views.innerHTML = " 50K ";
            price.innerHTML = " $12.00 ";
    }else if(range>=40 && range<60){
            views.innerHTML = " 100K ";
            price.innerHTML = " $16.00 ";
    }else if(range>=60 && range<80){
            views.innerHTML = " 500k ";
            price.innerHTML = " $24.00 ";
    }else{
            views.innerHTML = " 1M ";
            price.innerHTML = " $36.00 ";
            
    }
    slider.style.background = 'linear-gradient(90deg,hsl(174, 77%, 80%) '+range+'%,hsl(224, 65%, 95%) '+(range-slider.min)+'%)';
}
