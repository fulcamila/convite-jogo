document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerText = '🎉';
    document.getElementById('locationSection').style.display = 'block'; // Mostra o campo para local
    document.getElementById('justificationSection').style.display = 'none'; // Esconde o campo de justificativa
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerText = ' 😢';
    document.getElementById('justificationSection').style.display = 'block'; // Mostra o campo para justificativa
    document.getElementById('locationSection').style.display = 'none'; // Esconde o campo de local
});

document.getElementById('submitJustification').addEventListener('click', function() {
    const justification = document.getElementById('justificationInput').value;
    document.getElementById('responseMessage').innerText = `Justificativa enviada: "${justification}"`;
    document.getElementById('justificationInput').value = ''; // Limpa o campo
    document.getElementById('justificationSection').style.display = 'none'; // Esconde o campo de justificativa
});

document.getElementById('submitLocation').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    document.getElementById('responseMessage').innerText = `Local do jogo enviado: "${location}"`;
    document.getElementById('locationInput').value = ''; // Limpa o campo
    document.getElementById('locationSection').style.display = 'none'; // Esconde o campo de local
});
