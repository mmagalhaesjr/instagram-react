export default function Stories() {

  const listaStory = [
    { imagem: 'assets/img/9gag.svg', usuario: '9gag' },
    { imagem: 'assets/img/meowed.svg', usuario: 'josealdo' },
    { imagem: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet' },
    { imagem: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics' },
    { imagem: 'assets/img/respondeai.svg', usuario: 'respondeai' },
    { imagem: 'assets/img/filomoderna.svg', usuario: 'filomoderna' },
    { imagem: 'assets/img/memeriagourmet.svg', usuario: 'memeriagourmet' },
    { imagem: 'assets/img/barked.svg', usuario: 'barked' }]

  return (
    <div class="stories">
      {listaStory.map((p) => <Perfil imagem={p.imagem} usuario={p.usuario} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Perfil(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} alt="" />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}




