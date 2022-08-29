var select = (selector) => document.querySelector(selector);



select("#feriadoSim").addEventListener("change", () =>
   changeClassesInput()
)
select("#feriadoSim").addEventListener("change", () =>
   removeSpan()
)

function removeSpan() {
   if (select('.obs').classList.contains('hidden')) {
      select('.obs').classList.remove('hidden');
      select('.obs').classList.add('question');
   } else {
      select('.obs').classList.remove('question');
      select('.obs').classList.add('hidden');
   }
}

function changeClassesInput() {
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
   let salarioSemanal = '';
   let horasFeriado = select('#horasFeriado').value;

   
   switch ((select("#horasFeriado").classList.contains("hidden"))) {
      case (select("#horasFeriado").classList.contains("hidden")):
         if(horasTrabalhadas <= 44) {
            salarioSemanal = horasTrabalhadas * valorHora;
         } else {
            salarioSemanal = (44 * valorHora) + ((horasTrabalhadas - 44) * (valorHora * 1.5));
         }
         case (!select("#horasFeriado").classList.contains("hidden")):
            if(horasTrabalhadas <= 44) {
               salarioSemanal = (horasTrabalhadas * valorHora) + (horasFeriado * (valorHora * 2));
            } else {
               salarioSemanal = (44 * valorHora) + ((horasTrabalhadas - 44) * (valorHora * 1.5)) + (horasFeriado * (valorHora * 2));
            }
         }
         
   salarioMensal = salarioSemanal * 5;
   select('#resultado').textContent = salarioSemanal;
   select('#resultadoMensal').textContent = salarioMensal;

}


/* VALES */

function calcularVales() {
   var valorValeTransporte = document.getElementById('transporte').value;
   var valorValeAlimentacao = document.getElementById('alimentacao').value;
   var diasValeTransporte = document.getElementById('diasValeTransporte').value;
   var diasValeAlimentacao =  document.getElementById('diasValeAlimentacao').value;
   
   totalTransporteSemanal = diasValeTransporte * valorValeTransporte;
   totalAlimentacaoSemanal = diasValeAlimentacao * valorValeAlimentacao;

   select('#resultadoValeTransporte').textContent = totalTransporteSemanal;
   select('#resultadoValeAlimentacao').textContent = totalAlimentacaoSemanal;
}

select('#buttonCalc2').addEventListener('click', (e) => {
   e.preventDefault();
   calcularVales();
})

select("#resetVales").addEventListener('click', (event) => {
   select('#resultadoValeAlimentacao').textContent = '';
})
select("#resetVales").addEventListener('click', (event) => {
   select('#resultadoValeTransporte').textContent = '';
})
