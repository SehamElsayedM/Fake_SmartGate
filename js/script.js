let menu = document.querySelector("nav .row ul");
let toggeler = document.querySelector(".toggeller");
let row =document.querySelector("nav .row");
console.log(menu);
console.log(toggeler);

let  menufunction = () => {

    if (menu.style.display == "none") {
        menu.style.display = "block";
        row.style.height="100vh";
    }else {
        menu.style.display = "none";
        row.style.height= null;
    }

};
toggeler.addEventListener("click", menufunction);


menu.addEventListener("click", function (){
        menu.style.display = "none";
        row.style.height= null;
});
row.addEventListener("click", function (){
    menu.style.display = "none";
    row.style.height= null;
});