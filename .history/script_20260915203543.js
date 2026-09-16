let agendaroll = document.querySelectorAll(".btn")

agendaroll.forEach(function (botao) {

    botao.addEventListener("click", function () {
        document.getElementById("agendar").scrollIntoView({
            behavior: "smooth"
        })
    })

})
let service = document.getElementById("servA")

service.addEventListener("click", function () {
    document.getElementById("servicosT").scrollIntoView({ behavior: "smooth" })
})

let contatos = document.getElementById("contatosA")

contatos.addEventListener("click", function () {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" })
})

let agendarbtn = document.getElementById("agendarbtn")



agendarbtn.addEventListener("click", function(){
    if(document.getElementById("formI").value === ""){
        window.alert("dados não preenchidos")
    } else{
    window.alert("Agendado paizão")
    }
})