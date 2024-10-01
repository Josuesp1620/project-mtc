import { LoginView } from "../../views/auth/login";
import { RegisterView } from "../../views/auth/register";
import { HomeView } from "../../views/home";


interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [   
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterView },

]


export { publicRoutes };
