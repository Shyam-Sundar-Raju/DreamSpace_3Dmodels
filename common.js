function openSite(site){
    window.open(site+".html","_self");
}

function expand(imgs){
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    imgs.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }
}

const uname = ["1@gmail.com","2@gmail.com","3@gmail.com","4@gmail.com","5@gmail.com"];
const pwd = ["1234","2345","3456","4567","5678"];
var active = "";
function checkLogin(){
    var user=document.loginform.uname.value;
    var pass=document.loginform.psw.value;
    if (uname.includes(user)){
        if (pass==pwd[uname.indexOf(user)]){
            active=user;
            window.open('DreamSpace.html');
        }
        else{
            window.alert("Wrong email or password");
        }
    }
    else{
        window.alert("Wrong email or password");
    }
}

function newLogin(){
    var user=document.loginform.uname.value;
    var pass=document.loginform.psw.value;
    uname=uname.push(user);
    pwd=pwd.push(pass);
}

function changePwd(){
    var user=document.loginform.uname.value;
    var pass=document.loginform.psw.value;
    if (uname.includes(user)){
        pwd[uname.indexOf(user)]=pass;
        window.alert('Password changed');
    }
    else{
        window.alert("Email not found!!");
    }
}

function payCheck(){
    document.getElementById("pay_btn").style.display="block";
    document.getElementById("downloadbtn").style.display="none";
    paymentCheck();
}

function paymentCheck(){
    var popup=window.open("Payment.html");
}

function submitpopup(){
    var name=document.paymentform.name.value;
    var card=document.paymentform.number.value;
    var month=document.paymentform.expmonth.value;
    var cvv=document.paymentform.cvv.value;
    if (name=="Twin Flight" && card=="1234-1234-1234-1234" && month=="2024-11" && cvv=="911"){
        window.alert("Payment success");
        window.close();
    }

    else{
        window.alert("Wrong credentials!!");
    }
}