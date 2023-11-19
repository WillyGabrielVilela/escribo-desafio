function calcSigma() {
    let numberInt = parseFloat(document.getElementById("number").value)
    
    if (Number.isInteger(numberInt) && numberInt > 0) {

        let sigma = 0;

        for (let i = 1; i < numberInt; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sigma += i;
            }
        }

        document.getElementById("result").innerHTML = `
        <p class="sucess">
        O somatório dos números divisíveis por 3 ou 5, inferiores a ${numberInt}, é: <br/>
        <span>${sigma}</span>
        </p>
        <img class="mascot" src="/assets/mascote.png" alt="Mascote Escribo">
        `;
    } else {
        document.getElementById('result').innerHTML = `
        <p class="error">
        Digite um número inteiro positivo válido.
        </p>
        `;
    }

}
