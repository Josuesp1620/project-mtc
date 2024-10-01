import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <header className="px-6">
            <nav>
                <ul>
                    <li>
                        <Link to={'/login'} target="_blank">LOGIN</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>REGISTER</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}