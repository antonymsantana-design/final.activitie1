let agendaroll = document.querySelector(".btn");

agendaroll.addEventListener("click", function(){
    window.scrollTo({
        top: document.body.scrollHeight(".agendar"),
        behavior: "smooth"
    })
})