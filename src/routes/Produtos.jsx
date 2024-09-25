import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Produtos=()=>{

    //Hook- useState
    const [produtos, setProdutos] = useState([]);

    //função handleDelete
    const handleDelete = (id)=>{
        fetch(`http://localhost:4343/Produtos/${id}`,{
            method: 'delete',
        })
    }

    //Hook- useEffect
    useEffect(()=>{
        fetch('http://localhost:4343/Produtos/')
        .then((res)=> res.json())
        .then((res)=>{
            setProdutos(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);
    return(
        <>
        <section className="Produtos">
            <h2>Listar Produtos Cadastrados</h2>
            <Link to="/cadastrarproduto">Cadastrar Novo Produto</Link>
            <Link to="/login">Voltar</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>R${item.preco.toFixed(2)}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </>
    )
}
export default Produtos