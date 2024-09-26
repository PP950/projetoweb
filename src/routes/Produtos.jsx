import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    const handleDelete = (id) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            fetch(`http://localhost:4343/Produtos/${id}`, {
                method: 'DELETE',
            })
            .then((res) => {
                if (res.ok) {
                    setProdutos(produtos.filter(item => item.id !== id));
                } else {
                    alert("Erro ao excluir o produto. Tente novamente.");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Ocorreu um erro. Tente novamente.");
            });
        }
    };

    useEffect(() => {
        fetch('http://localhost:4343/Produtos/')
            .then((res) => res.json())
            .then((res) => {
                console.log(res); // Verifique a estrutura da resposta
                setProdutos(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
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
                                <td>R${isNaN(item.preco) ? "0.00" : parseFloat(item.preco).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default Produtos;
