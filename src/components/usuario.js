import React from "react"

export default function Usuario() {

  const [nome, setNome] = React.useState("Catana")
  const [img, setImg] = React.useState("assets/img/catanacomics.svg")

  function trocaNome() {
    const resposta = prompt('Digite seu nome')
    if (resposta !== "") {
      setNome(resposta)
    }
  }

  function trocaImagem() {
    const troca = prompt('Qual a URL da sua imagem?')
    if (troca !== "") {
      setImg(troca)
    }
  }

  return (
    <div data-test="user" class="usuario">
      <img data-test="profile-image" onClick={trocaImagem} src={img} alt="" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          <p data-test="name">{nome}</p>
          <ion-icon data-test="edit-name" name="pencil" onClick={trocaNome} ></ion-icon>
        </span>
      </div>
    </div>
  )
}


