const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

document.getElementById("shirts").onclick = function (){
    location.href = "./Shirts/Shirts.html";
};

document.getElementById("tshirts").onclick = function (){
    location.href = "./T-shirts/T-shirts.html";
};

document.getElementById("pants").onclick = function (){
    location.href = "./Pants/Pants.html";
};

document.getElementById("shoes").onclick = function (){
    location.href = "./Shoes/Shoes.html";
};

document.getElementById("red").onclick = function (){
    location.href = "./Accessories/Access.html";
};


// document.getElementById("offer1").onclick= function(){
//     location.href= "./Sale/Sale.html";
// };
// document.getElementById("offer2").onclick= function(){
//     location.href= "./Sale/Sale.html";
// };
// document.getElementById("offer3").onclick= function(){
//     location.href= "./Sale/Sale.html";
// };
// document.getElementById("offer4").onclick= function(){
//     location.href= "./Sale/Sale.html";
// };


// document.querySelectorAll(".trend").onclick=function(){
//     location.href="./Sale/Sale.html"
// };
document.querySelectorAll('.trend').forEach(item => {
    item.addEventListener('click', event => {
    location.href="./Sale/Sale.html"
  });
})
// signin - logout
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    console.log("testing")
    var wrapper = document.getElementsByClassName('profile')[0]
        if(wrapper){
            console.log(wrapper)
            var myHtml='';
            var temp = localStorage.getItem("userdetails");
            var userdetails = JSON.parse(temp)
            if(userdetails){
                myHtml = `<button class="tooltip" onclick="logout()"><span class="tooltipText">Click here to logout</span><a href="./SignIn.html">${userdetails.username}</a></button>`
            }else{
                myHtml = `<button><a href="./SignIn.html">Sign Up</a></button>`
            }
            wrapper.innerHTML = myHtml;
        }
}

function logout(){
    localStorage.removeItem("userdetails")
    localStorage.removeItem("arrData")
    alert("You have been logged out...")
}