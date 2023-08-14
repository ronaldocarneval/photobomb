import { useCallback, useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import './Formulario.css'
import supabase from '../../supabase'

const Formulario = (props) => {
    const [autor, setAutor] = useState('')
    const [imagemAutor, setImagemAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [legenda, setLegenda] = useState('')


    const aoSalvar = useCallback(async (evento) => {
        evento.preventDefault()
        const {data, error} = await supabase.from("imagens").insert([{autor, imagem, legenda}])
    
    },)

    // const aoSalvar = (evento) => {
    //     // evento.preventDefault()
    //     // props.aoImagemCadastrado({
    //     //     autor,
    //     //     imagemAutor,
    //     //     imagem,
    //     //     legenda
    //     // })
    // }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1> Preencha o formulario e publique sua imagem! </h1>
                <Campo
                    label='Autor'
                    obrigatorio={true}
                    placeholder='Digite o nome do autor'
                    aoAlterar={valor => setAutor(valor)}
                />
                <Campo
                    label='Imagem do Autor'
                    obrigatorio={false}
                    placeholder='Digite o endereço da imagem do autor'
                    aoAlterar={valor => setImagemAutor(valor)}
                />
                <Campo
                    label='Imagem'
                    obrigatorio={true}
                    placeholder='Digite o endereço da sua imagem'
                    aoAlterar={valor => setImagem(valor)}
                />
                <Campo
                    label='Legenda'
                    obrigatorio={true}
                    placeholder='Digite a legenda da sua imagem'
                    aoAlterar={valor => setLegenda(valor)}
                />
                <Botao>
                    Publique sua imagem
                </Botao>
            </form>
        </section>

    )

}

export default Formulario

