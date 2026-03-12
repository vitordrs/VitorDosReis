// pagina ativa
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("ativo");
    }
});

// navegação
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")

    if(window.scrollY > 20){
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
})

// voltar inicio da pagina
const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btnTopo.classList.add("show");
    } else{
        btnTopo.classList.remove("show");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// painel
function togglePainel(id, botao) {
    const painel = document.getElementById(id)
    const seta = botao.querySelector(".seta")
    if (painel.classList.contains('open')) {
        painel.classList.remove('open')
        seta.classList.remove('aberta')
    } else {
        painel.classList.add('open')
        seta.classList.add('aberta')
    }
}

// modal
function abrirCertificado(link){
    const modal = document.getElementById("modalCertificado")
    const frame = document.getElementById("frameCertificado")
    frame.src = link
    modal.style.display = "block"
}

function fecharCertificado(){
    const modal = document.getElementById("modalCertificado")
    const frame = document.getElementById("frameCertificado")
    modal.style.display = "none"
    frame.src = ""
}
function clicouFora(event){
    const frame = document.getElementById("frameCertificado")
    if(event.target.id === "modalCertificado"){
        fecharCertificado()
    }
}
document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        fecharCertificado()
    }
})

// copiar email
const emailBtn = document.getElementById("copiarEmail");
    emailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("soaresvitor196@gmail.com");
    emailBtn.textContent = "Email copiado!";            
    setTimeout(() => {
        emailBtn.innerHTML = '<i class="fas fa-envelope"></i> E-mail';
    }, 2000);
});