

function generatePassword(qty) {
    var length = qty,
        charset = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,!,@,$,(,),/,|,%";
        charset = charset.split(",");
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset[(Math.floor(Math.random() * n))];
    }
    console.log(retVal)   
    return retVal
}

function renderPasswords(){
    var passwordEL = document.querySelectorAll(".password-el");
    for (var i = 0; i < passwordEL.length; i++){
    let numberBox = document.getElementById("number")
    passwordEL[i].innerText = generatePassword(numberBox.value)
    passwordEL[i].value = generatePassword(numberBox.value)
    passwordEL[i].style.color = "#fff"
    copy.style.display = "block"
    copyPassword1()

}
}

function copyPassword1(){
    
    const copy = document.getElementById("copy")
    const pass1 = document.getElementById("pass1")

    setTimeout(function (){
        
        copy.addEventListener('click', function(){
         /* Select the text field */
  pass1.select();
  pass1.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass1.value);

  /* console log the copied text */
  console.log("Copied the text: " + pass1.value);

    })}, 1000)
}

