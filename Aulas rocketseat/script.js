function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const imagem = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    imagem.setAttribute("src", "./assets/logo.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    imagem.setAttribute("src", "./assets/escrita dj colombo sc 1 redondo.png")
  }

  // pegar a tag alt
  const alt = document.querySelector("#profile img")

  // substituir texto
  if (html.classList.contains("light")) {
    // se tiver light mode, mudar o texto light
    alt.setAttribute("alt", "2 Logo do DJ Colombo SC com fundo preto")
  } else {
    // se tiver sem light mode, manter o texto normal
    alt.setAttribute("alt", "Logo do DJ Colombo SC com fundo preto")
  }
}
