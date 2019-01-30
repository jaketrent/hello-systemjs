export function bootstrap(props) {
  return Promise.resolve()
}

export function mount(props) {
  return Promise.resolve().then(() => {
    domElementGetter().innerHTML = '<h1>Skills</h1>'
  })
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    domElementGetter().textContent = ''
  })
}

function domElementGetter() {
  let el = document.getElementById('ps-main')
  if (!el) {
    el = document.createElement('div')
    el.id = 'ps-main'
    document.body.appendChild(el)
  }

  return el
}

// export default { bootstrap, mount, unmount }
