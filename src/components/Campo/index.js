import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {
    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterar(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>

    )
}

export default Campo