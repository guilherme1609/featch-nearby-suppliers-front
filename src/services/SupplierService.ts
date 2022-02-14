import axios from "axios";
import Supplier from "../core/CustomerSupplierAddress";
import SuppliersRepository from "../core/CustomerSuppliersRepository";

export default class SupplierService implements SuppliersRepository {

	fetchAllNearbySuppliers(): Promise<Supplier[]> {
		const api = process.env.REACT_APP_API || ''
		const auth = localStorage.getItem('auth') || ''
		return axios.get(
			`${api}/customers/suppliers`,
			{ headers: { 'Authorization': auth } }
		)
			.then(({ data }) => {
				return data.data
			})
			.catch(err => console.log(err));
	}
}
