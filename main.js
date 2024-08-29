document.getElementById('cpf').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    e.target.value = value;
});

document.getElementById('telefone').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); 
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); 

    e.target.value = value;
});

document.getElementById('abrirImagem').addEventListener('click', (e) => {
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