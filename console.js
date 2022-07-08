const btnEl = document.querySelector('.btn')

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper')
  const iconEl = btnEl.querySelector('i')

  wrapperEl.classList.toggle('active')

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line')
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line')
  }
}

btnEl.addEventListener('click', toggleOptions)

function darkMode() {
  document.body.classList.add('dark')
}

function lightMode() {
  document.body.classList.remove('dark')
}

function wa() {
  navigator.clipboard.writeText('https://wa.me/5588992002847')
}
function ig() {
  navigator.clipboard.writeText('https://www.instagram.com/lusca_barboza/')
}
function fb() {
  navigator.clipboard.writeText('https://www.facebook.com/Emmanuel.Victor.l')
}
function allert() {
  swal({
    title: 'Boa!',
    text: 'Já pode mandar pro seu amigo! 😎🤙',
    icon: 'success'
  })
}
