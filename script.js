
///ADICIONAR AO CARRNHO

let cartItems = [];
let totalAmount = 0;


function addToCart(productName, productPrice, productImage) {
    let item = cartItems.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
        totalAmount += productPrice;
    } else {
        cartItems.push({ name: productName, price: productPrice, quantity: 1, image: productImage });
        totalAmount += productPrice;
    }

    updateCartList();
    document.getElementById('cart-item-count').textContent = `(${cartItems.length})`;
    alert(`${productName} adicionado ao carrinho por R$${formatCurrency(productPrice)}`);
}



//// FUNÇÕES PARA O DROPDOWN, BOTÕES + E - PREÇO E ETC...

function updateCartList() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartDropdown = document.getElementById('cart-dropdown');
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
        cartDropdown.style.display = 'none';
    } else {
        cartDropdown.style.display = 'block';

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');

            
            const quantityControls = document.createElement('div');
            quantityControls.classList.add('quantity-controls');

            const decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            decreaseButton.classList.add('quantity-decrease');
            decreaseButton.onclick = () => updateQuantity(item.name, -1);

            const increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            increaseButton.classList.add('quantity-increase');
            increaseButton.onclick = () => updateQuantity(item.name, 1);

            quantityControls.appendChild(increaseButton); 
            quantityControls.appendChild(decreaseButton); 

            
            const itemQuantity = document.createElement('span');
            itemQuantity.textContent = `${item.quantity}x`;
            itemQuantity.classList.add('cart-item-quantity');

           
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('cart-item-image');

           
            const text = document.createElement('span');
            text.textContent = `${item.name} - R$${formatCurrency(item.price)}`;

            listItem.appendChild(quantityControls);
            listItem.appendChild(itemQuantity);
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


function updateQuantity(productName, change) {
    const item = cartItems.find(item => item.name === productName);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(item => item.name !== productName);
        } else {
            totalAmount += change * item.price;
        }
        updateCartList();
        document.getElementById('cart-item-count').textContent = `(${cartItems.length})`;
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





// COISAS RELACIONADAS AO BANNER




const img_banner = document.querySelector('#imagem-banner');
const container_banner = document.querySelector('.banner');
const previous_carousel = document.querySelector('#previous');
const next_carousel = document.querySelector('#next');

let index = 1;
let firstSlide;

function changeImage() {
    img_banner.setAttribute('src', `imagens/BANNER${index}.png`);
    nextSlide();
}

function nextSlide() {
    if (index < 4) {
        index++;
    } else {
        index = 1;
    }
    img_banner.setAttribute('src', `imagens/BANNER${index}.png`);
}

function previousSlide() {
    if (index > 1) {
        index--;
    } else {
        index = 4;
    }
    img_banner.setAttribute('src', `imagens/BANNER${index}.png`);
}

let banner = setInterval(changeImage, 5000);
container_banner.addEventListener('mouseover', () => {
    clearInterval(banner);
});

container_banner.addEventListener('mouseout', () => {
    clearInterval(banner);
    banner = setInterval(changeImage, 5000);
});

next_carousel.addEventListener('click', nextSlide);
previous_carousel.addEventListener('click', previousSlide);
