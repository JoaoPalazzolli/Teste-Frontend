const cpfInput = document.getElementById("cpf");
const phoneInput = document.getElementById("telefone");
const textInput = document.getElementById("text");
const btnOpenImage = document.getElementById("abrirImagem");
const btnGenerateImage = document.getElementById("generateImage");
const btnSendMensage = document.getElementById("sendMensage");
const number1Input = document.getElementById("inputRegra1");
const number2Input = document.getElementById("inputRegra2");
const number3Input = document.getElementById("inputRegra3");
const result = document.getElementById("result");
const imgZoom = document.getElementById("imgCasaZoom");
const viewPhone = document.querySelectorAll("#verTelefone");

cpf.addEventListener('input', (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
});

phoneInput.addEventListener('input', (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = value;
});

btnOpenImage.addEventListener('click', (e) => {
    e.preventDefault();

    const selection = document.getElementById('sectionModal');
    const img = document.getElementById('imagemCasa');

    const newDiv = document.createElement('div');

    newDiv.innerHTML += `
    <div id="imagemModal" class="modal">
        <div class="modal-content-wrapper">
            <span id="fecharModal" class="close">&times;</span>
            <hr class="separator">
            <img class="modal-content" id="imgModal">
        </div>
    </div>`;

    newDiv.id = "modalId";

    selection.appendChild(newDiv);

    const modal = document.getElementById('imagemModal');
    const modalImg = document.getElementById('imgModal');


    modal.style.display = "block";
    modalImg.src = img.src;

    document.getElementById('fecharModal').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('imagemModal').style.display = "none";
        selection.removeChild(newDiv);
    });
});


window.addEventListener('click', (e) => {
    e.preventDefault();
    const selection = document.getElementById('sectionModal');
    const removeDiv = document.getElementById("modalId");

    const modal = document.getElementById('imagemModal');
    if (e.target === modal) {
        modal.style.display = "none";
        selection.removeChild(removeDiv);
    }
});

btnGenerateImage.addEventListener('click', (e) => {
    e.preventDefault();

    html2canvas(document.querySelector("#capture")).then(result => {
        const btnDownload = document.createElement('a');

        btnDownload.href = result.toDataURL("image/png");
        btnDownload.download = 'minha-imagem.png';
        btnDownload.click();
        console.log("Iniciando Download");
    }).catch(e => {
        console.log("ERROR");
    })
});

btnSendMensage.addEventListener('click', (e) => {
    e.preventDefault();

    textInput.value = "";
    phoneInput.value = "";
    cpfInput.value = "";

    alert("Mensagem Enviada com Sucesso!!!");
});

number1Input.addEventListener('keyup', (e) => {
    if (number2Input.value && number3Input.value && number1Input.value) {
        let resultado = (number2Input.value * number3Input.value) / number1Input.value;
        result.innerText = resultado;
    } else{
        result.innerText = "";
    }
});

number2Input.addEventListener('keyup', (e) => {
    if (number2Input.value && number3Input.value && number1Input.value) {
        let resultado = (number2Input.value * number3Input.value) / number1Input.value;
        result.innerText = resultado;
    } else{
        result.innerText = "";
    }
});

number3Input.addEventListener('keyup', (e) => {
    if (number2Input.value && number3Input.value && number1Input.value) {
        let resultado = (number2Input.value * number3Input.value) / number1Input.value;
        result.innerText = resultado;
    } else{
        result.innerText = "";
    }
});

viewPhone.forEach(btn => {

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.title === "number1"){
            btn.innerText = `(99) 99999-9999`;
            btn.classList.remove("ver-telefone");
            btn.classList.add("telefone");
        }

    })

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.title === "number2"){
            btn.innerText = `(22) 22222-2222`;
            btn.classList.remove("ver-telefone");
            btn.classList.add("telefone");
        }

    })
})