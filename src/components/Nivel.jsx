function Nivel(props){
    const nivelAtual = props.nivel
    const retorno = nivelAtual == 'iniciante' ? 'Bem-vindo, iniciante!' : nivelAtual == 'intermediario' ? 'Você está progredindo!' : nivelAtual == 'avancado' ? 'Parabéns, especialista!' : ""

    return <h1>{retorno}</h1>
}

export default Nivel