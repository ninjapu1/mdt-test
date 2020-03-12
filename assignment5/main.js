var post =1;
function postFunction(){
   
     var textbox= document.getElementById("text1");
     var text1= document.getElementById("post1");
     var text2= document.getElementById("reply1");
     var text3= document.getElementById("reply2");
     
     if(post==1){
         text1.innerText=textbox.value;
         
     }
     if(post==2){
         text2.innerText=textbox.value;
         
     }
     if(post==3){
         text3.innerText=textbox.value;
     }
     post++;     
}
function clearFunction(){
     var text1= document.getElementById("post1");
     var text2= document.getElementById("reply1");
     var text3= document.getElementById("reply2");
     text="";
     text1.innerText=text;
     text2.innerText=text;
     text3.innerText=text;
}
