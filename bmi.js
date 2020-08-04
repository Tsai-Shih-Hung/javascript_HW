var el =document.querySelector('.submit')
var str="";
function calculate() {
    
    console.log(str);
    var cm=document.getElementById('cm').value;
    localStorage.setItem('cm',cm);
    var kg=document.getElementById('kg').value;
    localStorage.setItem('kg',kg);
    var bmi=(kg/(Math.pow(cm/100, 2))).toFixed(2);
    localStorage.setItem('bmi',bmi);     
    console.log(bmi); 
    
    var getcm=localStorage.getItem('cm');
    var getkg=localStorage.getItem('kg');
    var getbmi=localStorage.getItem('bmi');
    var bmi=document.querySelector('.bmi')

    
    var contentbmi='<li class="bmi" >'+'bmi'+getbmi+'</li>'
   
    var contentcm='<li class="cm" >'+'height'+getcm+'</li>'
    console.log(contentcm);
    var contentkg='<li class="kg" >'+'weight'+getkg+'</li>'
    console.log(contentkg); 
    
    var ulcontent='<ul class="inside" style="display: inline-block;display: flex;justify-content:between; ">'
    var divcontent='<div class="bar"></div>'

    var status;
    
    
    if(getbmi<18.5){
         status="過輕";
         var divcontent='<div class="underweight"></div>';
         var but=document.querySelector(".submit")
         but.classList.add('underweightbut');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:60px; font-family:SFNSDisplay;font-size: 32px;color: #31BAF9;">過輕</p></div>'

         
    }else if(getbmi>=18.5 && getbmi<25){
         status="理想";
         var divcontent='<div class="normal"></div>'
         var but=document.querySelector(".submit")
         but.classList.add('normalbut');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:60px; font-family:SFNSDisplay;font-size: 32px;color: #86D73F;">理想</p></div>'
    
    }else if (getbmi>=25 &&getbmi<30){
         status="過重";
         var divcontent='<div class="overweight"></div>'
         var but=document.querySelector(".submit")
         but.classList.add('overweightbut');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:60px; font-family:SFNSDisplay;font-size: 32px;color: #FF982D;">過重</p></div>'

    }else if (getbmi>=30 && getbmi<35){
        status="輕度肥胖";
        var divcontent='<div class="overweight1"></div>'
        var but=document.querySelector(".submit")
         but.classList.add('overweight1but');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:10px; font-family:SFNSDisplay;font-size: 32px;color: #FF6C03;">輕度肥胖</p></div>'

    }else if (getbmi>=35 && getbmi<40){
        status="中度肥胖";
        var divcontent='<div class="overweight2"></div>'

        var but=document.querySelector(".submit")
         but.classList.add('overweight1but');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:10px; font-family:SFNSDisplay;font-size: 32px;color: #FF6C03;">中度肥胖</p></div>'
    }else if(getbmi>=40){
        status="重度肥胖";
        var divcontent='<div class="overweight3"></div>'

        var but=document.querySelector(".submit")
         but.classList.add('overweight3but');
         but.setAttribute('value',getbmi);
         var inputform=document.querySelector('form span');
         inputform.innerHTML='<div><p style="position:absolute ;bottom:50%;right:10px; font-family:SFNSDisplay;font-size: 32px;color: #FF1200;">重度肥胖</p></div>'
    }

    localStorage.setItem("status",status);
    var getstatus=localStorage.getItem('status');
    console.log(getstatus);
    var contentstatus='<li>'+getstatus+'</li>'

    var today= new Date();
    var todaydate=today.getDate();
    var todaymonth=today.getMonth();
    var todayyear=today.getFullYear();
    var datecontent='<li>'+'日期'+todayyear+'/'+todaymonth+'/'+todaydate+'</li>'
    console.log(str);
    str='<div style="margin-top:16px;">'+ulcontent+divcontent+contentstatus+contentbmi+contentkg+contentcm+datecontent+'</div>'+str;
    var inside= document.querySelector('.section');
    inside.innerHTML=str;
    console.log(str);
}
el.addEventListener('click',calculate,false);

document.getElementById('clearbut').onclick=function(){
    
    document.getElementById('cm').value="";
    document.getElementById('kg').value="";
    document.getElementById('submit').className='submit';
    document.getElementById('submit').setAttribute('value','看結果');
    document.querySelector('form span ').innerHTML = ""
}

var block=document.getElementById('submit');
function updatalist(){
    if(document.getElementById('cm').value != ("")) and  (document.getElementById('kg').value != ("")) 
     block.disabled = false;
}
block.addEventListener('change',updatalist,false);








