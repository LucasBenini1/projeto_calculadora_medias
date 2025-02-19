let finais = [];
document.getElementById("btn").addEventListener("click", () => {
    let atv = document.getElementById("atv").value;
    let nota = Number(document.getElementById("nota").value);

    if (atv.length && !isNaN(nota) && nota >= 0 && nota <= 10) {
        finais.push(nota);

        let tabela = document.getElementById("bellow");
        let linha = document.createElement("tr");

        // Coluna para o nome da atividade
        let colunaAtv = document.createElement("td");
        colunaAtv.innerText = atv;

        // Coluna para a nota
        let colunaNota = document.createElement("td");
        colunaNota.innerText = nota;

        // Coluna para o status (aprovado/reprovado)
        let colunaAprovado = document.createElement("td");
        let img = document.createElement("img");
        img.style.height = '25px';
        img.src = nota > 5 ? "images/aprovado.png" : "images/reprovado.png";
        colunaAprovado.appendChild(img);

        // Adicionar as colunas à linha
        linha.appendChild(colunaAtv);
        linha.appendChild(colunaNota);
        linha.appendChild(colunaAprovado);

        // Adicionar a linha na tabela
        tabela.appendChild(linha);

        // Exibir a média e o status final
        document.getElementById("divMedia").style.display = 'flex';
        let grade = document.getElementById("notaFinal");
        let aprFinal = document.getElementById("aprFinal");

        const soma = finais.reduce((acc, val) => acc + val, 0);
        const media = soma / finais.length;

        grade.innerHTML = media.toFixed(2);

        if (media >= 5) {
            aprFinal.innerHTML = "Aprovado";
            aprFinal.style.backgroundColor = 'green';
            aprFinal.style.color = 'white';
            aprFinal.style.padding = '4px';
            aprFinal.style.borderRadius = '4px';
        } else {
            aprFinal.innerHTML = "Reprovado";
            aprFinal.style.backgroundColor = 'red';
            aprFinal.style.color = 'white';
            aprFinal.style.padding = '4px';
            aprFinal.style.borderRadius = '4px';
        }
    } else {
        alert("Preencha os campos corretamente.");
    }
});
