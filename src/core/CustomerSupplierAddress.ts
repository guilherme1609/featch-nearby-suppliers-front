import CustomerAddress from "./CustomerAddress"
import Supplier from "./Supplier"

export default class CustomerSupplierAddress {
	#id: number
	#name: string
	#customer: CustomerAddress
	#suppliers: Supplier[]

	constructor(
		id: number,
		name: string,
		customer: CustomerAddress,
		suppliers: any
	) {
		this.#id = id,
		this.#name = name,
		this.#customer = customer,
		this.#suppliers = suppliers
	}

	get id() { return this.#id }
	get name() { return this.#name }
	get customer() {return this.#customer}
	get suppliers() { return this.#suppliers }

}
