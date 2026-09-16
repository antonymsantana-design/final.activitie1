let agendaroll = document.getElementById("btn");

agendaroll.addEventListener("click", function(){
    document.querySelector("#agendar").scrollIntoView({behavior: "smooth"});
})