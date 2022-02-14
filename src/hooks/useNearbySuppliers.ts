import { useEffect, useState } from "react";
import Supplier from "../core/CustomerSupplierAddress";
import CustomerSuppliersRepository from "../core/CustomerSuppliersRepository";
import SupplierService from "../services/SupplierService";

export default function useNearbySuppliers() {
	const serviceSuppliers: CustomerSuppliersRepository = new SupplierService()
	const [customerSuppliers, setCustomerSuppliers] = useState<Supplier[]>([])

	useEffect(fetchAllSuppliers, [])

	function fetchAllSuppliers() {
		serviceSuppliers.fetchAllNearbySuppliers()
						.then(data => {
							setCustomerSuppliers(data)
						})
						.catch(err => console.log(err))
	}

	return {
		customerSuppliers,
		fetchAllSuppliers
	}
}
