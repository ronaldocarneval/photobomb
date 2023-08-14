import './Imagem.css'

const Imagem = (props) => {
    return (
        <div className='imagem'>
            <a target="_blank" href={props.imagem}>
                <img src={props.imagem} alt={props.autor} />
            </a>
            <div className='legenda'>
                <h2>{props.legenda}</h2>
                Postado por {props.autor}
            
            </div>

        </div>
        

    )
}

export default Imagem