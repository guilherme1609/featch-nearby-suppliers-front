import Supplier from "./Supplier"

export default class CustomerSupplier {
	#id: number
	#name: string
	#addressName: string
	#address: string
	#street: string
	#number: string
	#postal_code: string
	#neighborhood: string
	#city: string
	#state: string
	#country: string
	#lat: string
	#long: string
	#suppliers: Supplier[]

	constructor(
		id: number,
		name: string,
		addressName: string,
		address: string,
		street: string,
		number: string,
		postal_code: string,
		neighborhood: string,
		city: string,
		state: string,
		country: string,
		lat: string,
		long: string,
		suppliers: any
	) {
		this.#id = id,
		this.#name = name,
		this.#addressName = addressName,
		this.#address = address,
		this.#street = street,
		this.#number = number,
		this.#postal_code = postal_code,
		this.#neighborhood = neighborhood,
		this.#city = city,
		this.#state = state,
		this.#country = country,
		this.#lat = lat,
		this.#long = long,
		this.#suppliers = suppliers
	}

	get id() { return this.#id }
	get name() { return this.#name }
	get addressName() { return this.#addressName }
	get address() { return this.#address }
	get street() { return this.#street }
	get number() { return this.#number }
	get postal_code() { return this.#postal_code }
	get neighborhood() { return this.#neighborhood }
	get city() { return this.#city }
	get state() { return this.#state }
	get country() { return this.#country }
	get lat() { return this.#lat }
	get long() { return this.#long }
	get suppliers() { return this.#suppliers }

}
