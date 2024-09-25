import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        navigate("/login"); // Redireciona para a página de login
    };

    const isLoggedIn = sessionStorage.getItem("usuario") !== null;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;