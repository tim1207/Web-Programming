// 在這裡寫入你的JS邏輯
//Comment on JavaScript
// alert("Hellow")
// jQuery=>$
//jQuery("h1").text("New title")//$("h1").text("New title")
//<h1></h1>

// Select class="navbar-toggler"
//function() {}
// $(".navbar-toggler").click(
//     function(){
//         //change the class of navbar-list
//         $(".navbar-list").toggleClass("active")
//         $(".line").toggleClass("active")
//     }
// )

//JavaScript
document.querySelector(".navbar-toggler").addEventListener("click",function(){
    document.querySelector(".navbar-list").classList.toggle("active");
    document.querySelector(".line").classList.toggle("active");
})

