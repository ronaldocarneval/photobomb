import Imagem from '../Imagem'
import './Galeria.css'
import supabase from '../../supabase'
import { useState } from 'react'
import { useEffect } from 'react'


const Galeria = (props) => {
    const [galeriaFotos, setGaleriaFotos] = useState ('')
    
    useEffect (() => {
        const pegarFoto = async () => {
            const {data, error} = await supabase
            .from('imagens')
            .select()

            setGaleriaFotos(data)

        }
        pegarFoto()
    }, [])   
    
    return (
       
        <div className='galeria'>
            <div className='header'>
            <img src="/imagens/icon1.jpg" alt='icone'/>
            <h3>GALERIA DOS NOSSOS COLABORADORES</h3>
            </div>
            <div className='imagens'>
            {galeriaFotos.map(galeriaFoto => <Imagem 
              autor ={galeriaFoto.autor}
              imagem = {galeriaFoto.imagem}
              legenda = {galeriaFoto.legenda}/>)} 
                
            </div>
        </div>
     
    )
}
export default Galeria