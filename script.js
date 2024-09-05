let cartItems = [];
let totalAmount = 0;




function addToCart(productName, productPrice, productImage) {
    let item = cartItems.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
        totalAmount += productPrice;
    } else {
        cartItems.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
        totalAmount += productPrice;
    }

    updateCartList();
    document.getElementById('cart-item-count').textContent = `(${cartItems.length})`;
    alert(`${productName} adicionado ao carrinho por R$${formatCurrency(productPrice)}`);
}


function updateCartList() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartDropdown = document.getElementById('cart-dropdown');
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
        
        cartDropdown.style.display = 'none';
    } else {
        
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('cart-item-image');

            const text = document.createElement('span');
            text.textContent = `${item.name} - R$${formatCurrency(item.price)} x${item.quantity}`;

            listItem.appendChild(img);
            listItem.appendChild(text);
            cartItemsList.appendChild(listItem);
        });

        const totalItem = document.createElement('li');
        totalItem.textContent = `Total: R$${formatCurrency(totalAmount)}`;
        totalItem.classList.add('total');
        cartItemsList.appendChild(totalItem);

        
    }
}


function formatCurrency(value) {
    return value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


document.getElementById('cart').addEventListener('mouseover', () => {
    if (cartItems.length > 0) {
        document.getElementById('cart').classList.add('show');
    }
});
document.getElementById('cart').addEventListener('mouseleave', () => {
    document.getElementById('cart').classList.remove('show');
});
















//COISAS RELACIONADAS AO BANNER

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
  if (indice < 4) {
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
      indice = 4;
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