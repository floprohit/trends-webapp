import {environment} from "./environments/environment"
export class apiUrl{
    static login = environment.baseUrl + "/auth/login";
    static productsList = environment.baseUrl + "/products"
}