var checkbox = document.querySelector("#feriadoSim");

checkbox.addEventListener('change', function() {
   if (this.checked) {
     document.getElementById('inputFeriado').classList.remove("hidden");
   } else {
      document.getElementById('inputFeriado').classList.add("hidden");
   }
});

function calcular() {
   let horasTrabalhadas = document.querySelector('#inputSemFeriado').value;
   let valorHora = document.querySelector('#valorHora').value;
   let resultado = '';
   console.log(horasTrabalhadas);
   console.log(valorHora);

   if(horasTrabalhadas <= 40) {
      resultado = horasTrabalhadas * valorHora;
   } else if (horasTrabalhadas > 40) {
      resultado = (40 * valorHora) + ((horasTrabalhadas - 40) * (valorHora * 1.5));
   }

   console.log(resultado);

   document.querySelector('#resultado').innerHTML = resultado;
}