const cpfs = document.querySelectorAll('.cpf li');

function elementsInnerText([...elements]) {
  return elements.map(element => element.innerText);
}

console.log(elementsInnerText(cpfs));

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const formatarCPF = (cpfs) => {
  return cpfs.replace(/(\d{3})(\d{3})(\{3})(\d{2})/g, '$1.$2.$3-$4');
}

console.log(formatarCPF('08500287446'));