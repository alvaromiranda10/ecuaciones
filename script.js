function calcularRaices() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
  
    let discriminante = b * b - 4 * a * c;
    let x1, x2;
  
    if (discriminante > 0) {
        x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').innerText = `Las raíces de la función cuadrática son x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminante === 0) {
        x1 = x2 = -b / (2 * a);
        document.getElementById('resultado').innerText = `Las raíces de la función cuadrática son x1 = x2 = ${x1}`;
    } else {
        let parteReal = -b / (2 * a);
        let parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
        //   document.getElementById('resultado').innerText = `x1 = ${parteReal} + ${parteImaginaria}i, x2 = ${parteReal} - ${parteImaginaria}i`;
        document.getElementById('resultado').innerText = `No tiene raices reales`;
    }
}

const filtro = (event) => {
    let tecla = event.key;
    if (['.',',', 'e'].includes(tecla)) {
        event.preventDefault();
    }
}

document.querySelectorAll('input[type="number"]').forEach(function(input) {
    input.addEventListener('keydown',filtro);
});