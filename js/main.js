import { swiper } from "./swiper.js";
import { swiperTwo } from "./swiper.js";
import { itemRemoveBtn } from "./svg.js";
import { fluggerOrange } from "./svg.js";
import { fluggerViolet } from "./svg.js";
import { buyBtnSvg } from "./svg.js";
import { cartBtnSvg } from "./svg.js";
import { modalClose } from "./svg.js";



// burger menu
const burger = document.querySelector('.burger-btn');

function menuCreate() {
  const header = document.querySelector('.header');
  const menu = document.createElement('div'),
    dataList = document.createElement('ul'),
    dataItemCatalog = document.createElement('li'),
    dataItemCart = document.createElement('li'),
    dataItemFavourites = document.createElement('li'),
    dataItemProfile = document.createElement('li'),
    dataLinkCatalog = document.createElement('a'),
    dataLinkCart = document.createElement('a'),
    dataLinkFavourites = document.createElement('a'),
    dataLinkProfile = document.createElement('a'),
    menuBlock = document.createElement('div'),
    menuClose = document.createElement('button'),
    menuContacts = document.createElement('div'),
    contactEmail = document.createElement('a'),
    contactPhone = document.createElement('a'),
    nav = document.createElement('nav'),
    navList = document.createElement('ul'),
    navItemDelivery = document.createElement('li'),
    navItemPay = document.createElement('li'),
    navItemReturn = document.createElement('li'),
    navItemHelp = document.createElement('li'),
    navItemAbout = document.createElement('li'),
    navItemBusiness = document.createElement('li'),
    navLinkDelivery = document.createElement('a'),
    navLinkPay = document.createElement('a'),
    navLinkReturn = document.createElement('a'),
    navLinkHelp = document.createElement('a'),
    navLinkAbout = document.createElement('a'),
    navLinkBusiness = document.createElement('a');

  menuBlock.classList.add('menu__box')
  menu.classList.add('menu');
  dataList.classList.add('menu__list', 'list-reset');
  dataItemCatalog.classList.add('menu__item');
  dataItemCart.classList.add('menu__item');
  dataItemFavourites.classList.add('menu__item');
  dataItemProfile.classList.add('menu__item');
  dataLinkCatalog.classList.add('menu__link', 'menu__link-catalog');
  dataLinkCart.classList.add('menu__link', 'menu__link-cart');
  dataLinkFavourites.classList.add('menu__link', 'menu__link-favourite');
  dataLinkProfile.classList.add('menu__link', 'menu__link-profile');
  menuClose.classList.add('menu__btn-close', 'btn-reset');
  menuContacts.classList.add('menu__contacts');
  contactEmail.classList.add('menu__contacts-email');
  contactPhone.classList.add('menu__contacts-phone');
  nav.classList.add('menu__nav');
  navList.classList.add('menu__nav-list', 'list-reset');
  navLinkDelivery.classList.add('nav__link-menu');
  navLinkPay.classList.add('nav__link-menu');
  navLinkReturn.classList.add('nav__link-menu');
  navLinkHelp.classList.add('nav__link-menu');
  navLinkAbout.classList.add('nav__link-menu');
  navLinkBusiness.classList.add('nav__link-menu');

  dataLinkCatalog.textContent = 'Каталог';
  dataLinkCart.textContent = 'Корзина';
  dataLinkFavourites.textContent = 'Избранное';
  dataLinkProfile.textContent = 'Профиль';
  contactEmail.textContent = 'info@kraskizdes.ru';
  contactPhone.textContent = '8 (495) 120-81-55';
  navLinkDelivery.textContent = 'Доставка'
  navLinkPay.textContent = 'Оплата'
  navLinkReturn.textContent = 'Возврат'
  navLinkHelp.textContent = 'Помощь'
  navLinkAbout.textContent = 'О нас'
  navLinkBusiness.textContent = 'Для бизнеса'

  dataLinkCatalog.href = '#';
  dataLinkCart.href = '#';
  dataLinkFavourites.href = '#';
  dataLinkProfile.href = '#';
  contactEmail.href = '#';
  contactPhone.href = '#';

  menu.append(dataList, menuContacts, nav);
  nav.append(navList)
  navList.append(navItemDelivery, navItemPay, navItemReturn, navItemHelp, navItemAbout, navItemBusiness);
  navItemDelivery.append(navLinkDelivery)
  navItemPay.append(navLinkPay)
  navItemReturn.append(navLinkReturn)
  navItemHelp.append(navLinkHelp)
  navItemAbout.append(navLinkAbout)
  navItemBusiness.append(navLinkBusiness)
  dataList.append(dataItemCatalog, dataItemCart, dataItemFavourites, dataItemProfile);
  dataItemCatalog.append(dataLinkCatalog);
  dataItemCart.append(dataLinkCart);
  dataItemFavourites.append(dataLinkFavourites);
  dataItemProfile.append(dataLinkProfile);
  menuContacts.append(contactEmail, contactPhone);
  header.append(menu);
  header.append(menuClose);
  document.body.append(menuBlock);

  menuBlock.addEventListener('click', () => {
    menu.remove();
    menuBlock.remove();
    menuClose.remove();
  })

  menuClose.addEventListener('click', () => {
    menu.remove();
    menuBlock.remove();
    menuClose.remove();
  })

  return {
    menuBlock,
    menuClose,
    menu
  }
}

burger.addEventListener('click', () => {
  menuCreate()
})

// cart
const btnCart = document.querySelector('.header__btn-cart');
const header = document.querySelector('.header__container');

const cartItemWrapper = document.createElement('div');
cartItemWrapper.classList.add('cart__item-wrapper')

let itemList = {
  priceNewOne: 3360,
  priceOldOne: 3850,
  volumeOne: '0.75л',
  colorNameOne: `${fluggerOrange} Flugger 900 FL 1358`,
  priceNewTwo: 18740,
  priceOldTwo: 19520,
  volumeTwo: '2.8л',
  colorNameTwo: `${fluggerViolet} Flugger 900 FL 1443`,
}

const price = itemList.priceNewOne + itemList.priceNewTwo

function createCart(count) {
  const cart = document.createElement('div'),
    cartWrapper = document.createElement('div'),
    cartTitle = document.createElement('span'),
    cartCountItem = document.createElement('span'),
    cartBottom = document.createElement('div'),
    totalBlock = document.createElement('div'),
    total = document.createElement('span'),
    totalPrice = document.createElement('span'),
    actionBlock = document.createElement('div'),
    buyBtn = document.createElement('button'),
    cartBtnGradient = document.createElement('div'),
    cartBtn = document.createElement('button');

  cart.classList.add('cart');
  cartWrapper.classList.add('cart__wrapper')
  cartTitle.classList.add('cart__title');
  cartCountItem.classList.add('cart__count-item')
  cartBottom.classList.add('cart__bottom');
  totalBlock.classList.add('cart__total-block');
  total.classList.add('cart__total');
  totalPrice.classList.add('cart__total-price');
  actionBlock.classList.add('cart__action-block');
  buyBtn.classList.add('cart__btn-buy');
  cartBtnGradient.classList.add('cart__btn-gradient')
  cartBtn.classList.add('cart__btn');

  cartTitle.textContent = 'Корзина';
  cartCountItem.textContent = count;
  total.textContent = 'Итого:';
  totalPrice.innerHTML = `${price.toLocaleString('ru-RU')}&#8381`;
  buyBtn.innerHTML = `Купить в 1 клик${buyBtnSvg}`;
  cartBtn.innerHTML = `Перейти в корзину${cartBtnSvg}`;

  cart.append(cartTitle, cartCountItem, cartWrapper, cartBottom);
  cartWrapper.append(cartItemWrapper);
  cartBottom.append(totalBlock, actionBlock);
  totalBlock.append(total, totalPrice);
  cartBtn.append(cartBtnGradient)
  actionBlock.append(buyBtn, cartBtn);
  header.append(cart);

  cart.addEventListener('mouseleave', () => {
    cart.remove()
  })

}

function cartItems(priceNew, priceOld, volume, colorName) {
  const cartItem = document.createElement('div'),
    cartImg = document.createElement('div'),
    cartContent = document.createElement('div'),
    cartDescr = document.createElement('p'),
    cartCharacteristic = document.createElement('div'),
    itemVolume = document.createElement('span'),
    itemColor = document.createElement('span'),
    itemColorName = document.createElement('span'),
    itemInfo = document.createElement('div'),
    itemPrice = document.createElement('div'),
    itemNewPrice = document.createElement('span'),
    itemOldPrice = document.createElement('div'),
    itemCount = document.createElement('span'),
    removeItem = document.createElement('button');

  cartItem.classList.add('cart__item');
  cartImg.classList.add('cart__img');
  cartContent.classList.add('cart__content');
  cartDescr.classList.add('cart__descr');
  cartCharacteristic.classList.add('cart__characteristic');
  itemVolume.classList.add('item__volume');
  itemColor.classList.add('item__color');
  itemColorName.classList.add('item__color-name');
  itemInfo.classList.add('item__info');
  itemPrice.classList.add('item__price');
  itemNewPrice.classList.add('item__price-new');
  itemOldPrice.classList.add('item__price-old');
  itemCount.classList.add('item__count');
  removeItem.classList.add('item__remove-btn', 'btn-reset')

  cartDescr.textContent = 'Flugger Dekso 25 Краска полуматовая с очень высокой прочностью для внутренних работ';
  itemNewPrice.innerHTML = `${priceNew.toLocaleString('ru-RU')}&#8381`;
  itemOldPrice.textContent = priceOld.toLocaleString('ru-RU');
  itemVolume.textContent = volume;
  itemColor.textContent = 'Полуматовый'
  itemColorName.innerHTML = colorName;
  itemCount.textContent = '1шт'
  removeItem.innerHTML = itemRemoveBtn;

  cartItem.append(cartImg, cartContent, itemInfo, removeItem);
  cartContent.append(cartDescr, cartCharacteristic);
  cartCharacteristic.append(itemVolume, itemColor, itemColorName);
  itemInfo.append(itemPrice, itemCount);
  itemPrice.append(itemNewPrice, itemOldPrice);

  return cartItem
}

cartItemWrapper.append(cartItems(itemList.priceNewOne, itemList.priceOldOne, itemList.volumeOne, itemList.colorNameOne),
  cartItems(itemList.priceNewTwo, itemList.priceOldTwo, itemList.volumeTwo, itemList.colorNameTwo))

btnCart.addEventListener('mouseover', () => {
  if (document.querySelectorAll('.cart').length < 1) {
    createCart(2)
  }
})

// formSearch
const formSearch = document.getElementById('form-search');
const inputSearch = document.getElementById('input-search');
const clearSearch = document.querySelector('.clear__search');
const errorSearch = document.getElementById('search-error');

inputSearch.addEventListener('input', () => {
  clearSearch.classList.add('clear__search--active');
})

clearSearch.addEventListener('click', () => {
  inputSearch.value = '';
  clearSearch.classList.remove('clear__search--active');
})


function validateSearch() {
  let result = true;

  const regSearch = /[A-Za-zА-Яа-яЁё0-9]/;

    if (inputSearch.value.length < 5) {
      errorSearch.textContent = 'Данные введены некорректно'
      errorSearch.classList.add('form__error-active')
      result = false;
    } else {
      errorSearch.textContent = '';
      errorSearch.classList.remove('form__error-active');
    }

    console.log(regSearch.test(inputSearch.value));
    

  console.log(result);
}
formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  validateSearch()
})

// form modal
function formModal() {
  const container = document.querySelector('.consultation__container')
  const modalBox = document.createElement('div'),
        modal = document.createElement('div'),
        modalWrapper = document.createElement('div'),
        modalTitle = document.createElement('span'),
        modalDescr = document.createElement('p'),
        modalBtn =document.createElement('button');

  modalBox.classList.add('modal__box');
  modal.classList.add('modal');
  modalWrapper.classList.add('modal__wrapper')
  modalTitle.classList.add('modal__title');
  modalDescr.classList.add('modal__descr');
  modalBtn.classList.add('modal__btn', 'btn-reset')

  modalTitle.textContent = 'Заявка принята';
  modalDescr.textContent = 'Благодарим вас за заявку! Мы приняли её, и наш менеджер свяжется с вами в ближайшее время.';
  modalBtn.innerHTML = modalClose;

  document.body.append(modalBox);
  
  container.append(modal);
  modal.append(modalWrapper, modalBtn)
  modalWrapper.append(modalTitle, modalDescr);

  modalBtn.addEventListener('click', () => {
    modalBox.remove();
    modal.remove();
  })

  modalBox.addEventListener('click', () => {
    modalBox.remove();
    modal.remove();
  })

  return {
    modalBox,
    modal,
    modalBtn
  }
}

// formConsultation
const formConsultation = document.getElementById('form-consultation');
const formErrorName = document.getElementById('error-name');
const formErrorPhone = document.getElementById('error-phone');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const starName = document.getElementById('star-name');
const starPhone = document.getElementById('star-phone');

function validate() {
  let result = true;
  const regPhone = /^((\+7|8)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{10}$/;

  if (inputName.value == '') {
    starName.classList.add('star-error--active');
    formErrorName.textContent = 'Поле должно быть заполнено';
    formErrorName.classList.add('form__error-active');
    result = false;
  } else {
    starName.classList.remove('star-error--active');
    formErrorName.textContent = '';
    formErrorName.classList.remove('form__error-active');
    result = true;
  }

  if (inputPhone.value == '') {
    starPhone.classList.add('star-error--active');
    formErrorPhone.textContent = 'Поле должно быть заполнено';
    formErrorPhone.classList.add('form__error-active');
    result = false;
  } else {
    starPhone.classList.remove('star-error--active');
    formErrorPhone.textContent = '';
    formErrorPhone.classList.remove('form__error-active');
    result = true;
  }

  if (!regPhone.test(inputPhone.value) && !inputPhone.value == '') {
    formErrorPhone.textContent = 'Поле неверно заполнено';
    formErrorPhone.classList.add('form__error-active');
    result = false;
  }
  
  if(result == true) {
    formModal();
    inputName.value = '';
    inputPhone.value = '';
  }

  return result
}

formConsultation.addEventListener('submit', (e) => {
  e.preventDefault();

  validate()

})


inputName.addEventListener('input', () => {
  if (inputName.value.length > 0) {
    starName.classList.remove('star-error--active');
  } else {
    starName.classList.add('star-error--active');
  }
})

inputPhone.addEventListener('input', () => {
  if (inputPhone.value.length > 0) {
    starPhone.classList.remove('star-error--active');
  } else {
    starPhone.classList.add('star-error--active');
  }
})


