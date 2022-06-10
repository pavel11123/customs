
function menu__open() {
   document.getElementById("phone__menu-id").style.width = "100%";
   document.getElementById("phone__menu-id-body").style.overflow = "hidden";
}

function menu__close() {
   document.getElementById("phone__menu-id").style.width = "0";
   document.getElementById("phone__menu-id-body").style.overflow = "visible";
}

const popup = () => {
   const popupBtn = document.getElementById('popup')
   const popupModal = document.querySelector('.popup')

   const cartCloseBtn = popupModal.querySelector('.cart-close')

   const openPopup = () => {
      popupModal.style.display = 'flex'
      document.getElementById("phone__menu-id-body").style.overflow = "hidden";
   }

   const closePopup = () => {
      popupModal.style.display = 'none'
      document.getElementById("phone__menu-id-body").style.overflow = "visible";
   }

   popupBtn.addEventListener('click', openPopup)
   cartCloseBtn.addEventListener('click', closePopup)

}

popup()