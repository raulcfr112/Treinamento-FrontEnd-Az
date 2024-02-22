function quantoFaltaPara(m, d) {
  const dataAtual = new Date();
  dataAtual.setHours(0);
  dataAtual.setMinutes(0);
  dataAtual.setSeconds(0);
  dataAtual.setMilliseconds(0);

  let anoAtual = dataAtual.getFullYear();

  let dataBirth = new Date(anoAtual, m - 1, d);

  const dataAtualTS = dataAtual.getTime();
  let dataBirthTS = +dataBirth;

  if (dataBirthTS < dataAtualTS) {
    dataBirth.setFullYear(++anoAtual);
    dataBirthTS = +dataBirth
  }

  const UM_DIA = 24 * 60 * 60 * 1000
  const diferenca = dataBirthTS - dataAtualTS
  return parseInt(diferenca / UM_DIA)
  //minha implementacao
  //     quantoFaltaUTC = Date.UTC(2024, m - 1, d);
  //     diferenca = new Date(quantoFaltaUTC) - Date.now();
  //     if(diferenca < 1){
  //         quantoFaltaUTC = Date.UTC(2025, m - 1, d);
  //         diferenca = new Date(quantoFaltaUTC) - Date.now();
  //     }
  //   diasRestantes = parseInt(diferenca / (1000 * 60 * 60 * 24));
  //   return  diasRestantes;
}
