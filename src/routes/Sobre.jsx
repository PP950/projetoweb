import dev1 from '../assets/dev1.jpg'
import { SobreStyle } from '../css/SobreStyle'

const Sobre=()=>{
    return(
        <>
        <SobreStyle>
        <h1>Integrantes do grupo</h1>
        <img src={dev1} alt="dev1"/>
        <p>Paulo Poças - RM556080, 

Guilherme Gomes - RM554606,

André Luiz Fernandes De Queiroz - Rm554503,

Israel Araujo Henriques de Moura - Rm559068,
</p>
    </SobreStyle>
        </>
    )
}
export default Sobre