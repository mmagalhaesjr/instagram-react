import React from "react"

export default function Posts() {

  const postagem = [
    { imgUser: 'assets/img/meowed.svg', nomeUser: 'josealdo', imgPost: 'assets/img/aldo1.png', imgFooter: 'assets/img/respondeai.svg', curtidasUser: 'Respondeai', nCurtidas: 100180 },

    { imgUser: "assets/img/barked.svg", nomeUser: 'barked', imgPost: "assets/img/aldo.png", imgFooter: "assets/img/adorable_animals.svg", curtidasUser: 'adorable_animals', nCurtidas: 99159 }
  ]
  return (
    <div class="posts">
      {postagem.map((p) => <Post imgUser={p.imgUser} nomeUser={p.nomeUser} imgPost={p.imgPost} imgFooter={p.imgFooter} curtidasUser={p.curtidasUser} nCurtidas={p.nCurtidas} />)}
    </div>
  )
}

function Post(props) {
  const [iconeSalvar, setIconeSalvar] = React.useState("bookmark-outline")
  const [cor, setCor] = React.useState("#000")
  const [heartIcon, setHeartIcon] = React.useState("heart-outline")
  const [curtidas, setCurtidas] = React.useState(props.nCurtidas)

  function salvar() {
    if (iconeSalvar === 'bookmark-outline') {
      setIconeSalvar("bookmark")
    } else {
      setIconeSalvar("bookmark-outline")
    }
  }

  function curtirPost() {
    if (cor === '#000') {
      setCurtidas(curtidas + 1)
      setCor("red")
      setHeartIcon("heart")
    } else {
      setCurtidas(curtidas - 1)
      setCor("#000")
      setHeartIcon("heart-outline")
    }
  }

  function curtirImg() {
    if (cor === '#000') {
      setCurtidas(curtidas + 1)
      setCor("red")
      setHeartIcon("heart")
    }

  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} alt="" />
          {props.nomeUser}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" src={props.imgPost} alt="" onClick={curtirImg} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon style={{ color: cor }} data-test="like-post" onClick={curtirPost} name={heartIcon}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={salvar} name={iconeSalvar}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgFooter} alt="" />
          <div class="texto" data-test="likes-number">
            Curtido por <strong> {props.curtidasUser} </strong> e <strong>outras {curtidas.toLocaleString({ style: 'decimal' })} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}