export default function Sugestoes() {

  const sugestao = [
    { imagem: "assets/img/bad.vibes.memes.svg", nome: 'bad.vibes.memes', razao: 'Segue você' },
    { imagem: "assets/img/chibirdart.svg", nome: 'chibirdart', razao: 'Segue você' }
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestao.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} razao={s.razao} />)}
    </div>
  )
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} alt="" />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  
  )
}