var select = (selector) => document.querySelector(selector);

select("#feriadoSim").addEventListener("change", () =>
   //select("#inputFeriado").classList.replace('hidden', 'question')
  changeClasses()
);

function changeClasses() {
   if (select("#inputFeriado").classList.contains('hidden')) {
      select("#inputFeriado").classList.remove('hidden');
      select("#inputFeriado").classList.add('question');
   } else {
      select("#inputFeriado").classList.add('hidden');
      select("#inputFeriado").classList.remove('question');
   }
}
   
select("#button").addEventListener('click', (e) => {
   e.preventDefault();
   calcular();
})
   
select("#reset").addEventListener('click', (event) => {
   event.document.getElementById('resultado').textContent = '';
})

select("#reset").addEventListener('click', (event) => {
   document.getElementById("inputFeriado").classList.add('hidden');
   document.getElementById("inputFeriado").classList.remove('question');

})

   
function calcular() {
   let horasTrabalhadas = document.querySelector('#horasSemFeriado').value;
   let valorHora = document.querySelector('#valorHora').value;
   let resultado = '';
   let horasFeriado = select('#horasFeriado').value;

   
   switch ((select("#horasFeriado").classList.contains("hidden"))) {
      case (select("#horasFeriado").classList.contains("hidden")):
         if(horasTrabalhadas <= 40) {
            resultado = horasTrabalhadas * valorHora;
         } else {
            resultado = (40 * valorHora) + ((horasTrabalhadas - 40) * (valorHora * 1.5));
         }
         case (!select("#horasFeriado").classList.contains("hidden")):
            if(horasTrabalhadas <= 40) {
               resultado = (horasTrabalhadas * valorHora) + (horasFeriado * (valorHora * 2));
            } else {
               resultado = (40 * valorHora) + ((horasTrabalhadas - 40) * (valorHora * 1.5)) + (horasFeriado * (valorHora * 2));
            }
         }
         
         select('#resultado').textContent = resultado;
      }