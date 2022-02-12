import { useState } from "react";

export default function useTeste(){
	const [teste, setTeste] = useState<any>()

	return {
		setTeste,
		teste
	}
}
