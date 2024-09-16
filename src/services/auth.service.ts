import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";


//Para permitir que uma instância seja injetada em outros components via providers*
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private auth: Auth){}

    public async createUser(
        name: string,
        email: string,
        password: string
    ){
        const userCredential = await createUserWithEmailAndPassword(this.auth,email,password);
        // console.log(userCredential);
        return {
            name,
            userCredential
        };
    }

    public async loginUser(
        email: string,
        password: string
    ){
        const userCredential = await signInWithEmailAndPassword(this.auth,email,password);
        const token = await userCredential.user.getIdToken();
        //Salvando token no localStorage p/ saber se usuário está logado
        localStorage.setItem("token",token);
        return {
            userCredential
        }
    }

    public logoutUser(){
        localStorage.removeItem("token");
        return signOut(this.auth);
    }

    public getCurrentUser(){
        return this.auth.currentUser;
    }
}