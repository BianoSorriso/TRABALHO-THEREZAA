function addToCart(productName, productPrice) {
    alert('$productName} adicionado ao carrinho por ${productPrice}')
}



const img_banner = document.querySelector('#imagem-banner');
const container_banner = document.querySelector('.banner');
const previus_carrosel = document.querySelector('#previous');
const next_carrosel = document.querySelector('#next');


let indice = 1;
let primeiroSlide;

function mudarImagem() {

  img_banner.setAttribute('src', `imagens/BANNER${indice}.png`);

    proximoSlide();
  }

function proximoSlide() {
  if (indice < 5) {
    indice++;
  } else {
    indice = 1;
   }
  img_banner.setAttribute('src', `imagens/BANNER${indice}.png`);
 }


  function slideAnterior() {
    if (indice > 1) {
      indice--;
    } else {
      indice = 5;
      }
     img_banner.setAttribute('src', `imagens/BANNER${indice}.png`);
    }

  let banner = setInterval(mudarImagem, 5000);
  container_banner.addEventListener('mouseover', (event) => {
    clearInterval(banner);
  });

  container_banner.addEventListener('mouseout', (event) => {
    clearInterval(banner);
    banner = setInterval(mudarImagem, 5000);
  });

  next_carrosel.addEventListener('click', proximoSlide);
  previus_carrosel.addEventListener('click', slideAnterior);