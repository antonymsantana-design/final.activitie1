let agendaroll = document.getElementById("btn");

agendaroll.addEventListener("click", function () {
  document.getElementById("agendar").scrollIntoView({ behavior: "smooth" });
});

let service = document.getElementById("servA");

service.addEventListener("click", function () {
    document.getElementById("servicosT").scrollIntoView({ behavior: "smooth" });
})

