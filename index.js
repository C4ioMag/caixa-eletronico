

function outcome() {
    let saque = parseInt(document.getElementById("box").value);
    let notasDisponiveis = [100, 50, 20, 10];
    let notasSacadas = [];
  
    for (let i = 0; i < notasDisponiveis.length; i++) {
      while (saque >= notasDisponiveis[i]) {
        notasSacadas.push(notasDisponiveis[i]);
        saque -= notasDisponiveis[i];
      }
    }
  
    let resultado = "Notas sacadas: " + notasSacadas.join(", ");
    document.getElementsByClassName("saque")[0].innerHTML = "<h3>" + resultado + "</h3>";
  }
  
  function update() {
    let valor = document.getElementById("box").value;
    if (valor === "") {
      document.getElementsByClassName("saque")[0].innerHTML = "<h3>Notas sacadas:</h3>";
    }
  }
  