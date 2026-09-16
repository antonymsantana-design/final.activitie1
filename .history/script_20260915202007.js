let agendaroll = document.getElementById("agendaroll");

agendaroll.addEventListener("click", function(){
    document.querySelector("#agendar").scrollIntoView({behavior: "smooth"});
})