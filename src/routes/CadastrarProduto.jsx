import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CadastrarProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4343/Produtos")
            .then((res) => res.json())
            .then((data) => {
                setProdutos(data);
            });
    }, []);

    const handleDelete = (id) => {
        // Função para deletar o produto
    };

    return (
        <section className="produtos">
            <h1>Lista de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{parseFloat(item.preco).toFixed(2)}</td>
                            <td>{item.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default CadastrarProdutos;
