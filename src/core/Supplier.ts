export default class Supplier {
	#id: number
	#name: string
	#range: number
	#street: string
	#number: string
	#postal_code: string
	#neighborhood: string
	#city: string
	#state: string
	#country: string
	#lat: string
	#long: string

	constructor(
		id: number,
		name: string,
		range: number,
		street: string,
		number: string,
		postal_code: string,
		neighborhood: string,
		city: string,
		state: string,
		country: string,
		lat: string,
		long: string
	) {
		this.#id = id,
		this.#name = name,
		this.#range = range,
		this.#street = street,
		this.#number = number,
		this.#postal_code = postal_code,
		this.#neighborhood = neighborhood,
		this.#city = city,
		this.#state = state,
		this.#country = country,
		this.#lat = lat,
		this.#long = long
	}

	get id() { return this.#id }
	get name() { return this.#name }
	get range() { return this.#range }
	get street() { return this.#street }
	get number() { return this.#number }
	get postal_code() { return this.#postal_code }
	get neighborhood() { return this.#neighborhood }
	get city() { return this.#city }
	get state() { return this.#state }
	get country() { return this.#country }
	get lat() { return this.#lat }
	get long() { return this.#long }

}
