export default class Auth {
	#id: number
	#name: string
	#email: string
	#password: string
	#customer_id: number

	constructor(id: number, name: string, email: string, password: string, customer_id: number) {
		this.#id = id,
			this.#name = name,
			this.#email = email,
			this.#password = password,
			this.#customer_id = customer_id
	}

	get id() { return this.#id }
	get name() { return this.#name }
	get email() { return this.#email }
	get password() { return this.#password }
	get customer_id() { return this.#customer_id }
}
