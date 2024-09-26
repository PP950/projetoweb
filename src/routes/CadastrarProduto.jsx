import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CadastrarProduto = () => {
    const [produtos, setProdutos] = useState([]);
    const nome = useRef(null);
    const preco = useRef(null);
    const descricao = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4343/Produtos")
            .then((res) => res.json())
            .then((data) => {
                setProdutos(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {
            nome: nome.current.value,
            preco: parseFloat(preco.current.value),
            descricao: descricao.current.value,
        };

        // Enviando o novo produto para o backend
        fetch("http://localhost:4343/Produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoProduto),
        })
            .then((res) => res.json())
            .then((data) => {
                // Atualiza a lista de produtos com o novo produto cadastrado
                setProdutos((prevProdutos) => [...prevProdutos, data]);

                // Redireciona para a lista de produtos após o cadastro
                navigate("/produtos");
            })
            .catch((err) => console.error("Erro ao cadastrar produto:", err));
    };

    return (
        <section className="container">
            <div className="container-login">
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="titulo-login">Cadastrar Produto</span>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="nome"
                                ref={nome}
                                placeholder="Nome do Produto"
                                required
                            />
                        </div>

                        <div className="w-input">
                            <input
                                type="number"
                                step="0.01"
                                className="input-form"
                                id="preco"
                                ref={preco}
                                placeholder="Preço"
                                required
                            />
                        </div>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="descricao"
                                ref={descricao}
                                placeholder="Descrição"
                                required
                            />
                        </div>

                        <div className="login-btn">
                            <button type="submit" className="login-form-btn">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CadastrarProduto;
