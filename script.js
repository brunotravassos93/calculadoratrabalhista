var select = (selector) => document.querySelector(selector);

select("#feriadoSim").addEventListener("change", () =>
   select("#inputFeriado").classList.toggle("hidden")
);

select("#button").addEventListener("click", (event) => {
   event.preventDefault();
   let horasTrabalhadas = select('#inputSemFeriado').value;
   let valorHora = select('#valorHora').value;
   let resultado;

   if (horasTrabalhadas <= 40) {
      resultado = horasTrabalhadas * valorHora;
   } else {
      resultado = 40 * valorHora + (horasTrabalhadas - 40) * valorHora * 1.5;
   }

   if (!select("#inputFeriado").classList.contains("hidden")) {
      resultado += select("#valorHoraFeriado").value * 2;
   }
   select('#resultado').textContent = resultado;
});