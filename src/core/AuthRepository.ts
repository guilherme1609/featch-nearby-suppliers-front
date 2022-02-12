import Auth from "./Auth";

export default interface AuthRepository{
	makeLogin(data: any): Promise<any>
	getMe(): Promise<Auth>
}
