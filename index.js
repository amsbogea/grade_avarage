let notas = [];

let input = document.querySelectorAll('input');

const calcular = document.querySelector('button');

calcular.addEventListener('click', () => {

  let result = document.querySelector('.result');
  if(result.innerHTML !== undefined) result.innerHTML = '';


  for(let x of input) {
    if(!x.value) return alert('Digite os valores');
    notas.push(Number(x.value));
  }

  let media = 0;
  result.append(`Média: ${somaMedia(media)}`);
  
  notas = [];
  zerarAuto(input);
});

function somaMedia(media) {
  for(let x in notas) {
    media += notas[x];
  }

  const mediaAt = media / 4;

  setStatus(media);

  return mediaAt;
}

function zerarAuto(input) {
  for(x of input) {
    x.value = "";
  }
}

// Bonus

function setStatus(media) {
  let status = document.querySelector('.status'); 
  if(status.classList.contains('rep')) status.classList.remove('rep')
  if(status.classList.contains('rec')) status.classList.remove('rec')
  if(status.classList.contains('aprov')) status.classList.remove('aprov')
  
  if(media < 4) {
    status.classList.add('rep');
    status.innerText = 'Reprovado!';
    return;
  }
  
  if(media >= 4 && media < 6) {
    status.classList.add('rec');
    status.innerText = 'Em Recuperação!';
    return;
  }


  if(media >= 6) {
    status.classList.add('aprov');
    status.innerText = 'Aprovado!';
    return;
  }
  
}