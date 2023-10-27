import { useEffect, useState } from "react";
const useDebouncedValue = (value, delay) => {
	const [debValue, setDebValue] = useState(value)

	useEffect(() => {
		const timerId = setTimeout(() => setDebValue(value), delay)

		return () => {
			clearTimeout(timerId)
		}
	}, [value, delay]);

	return debValue
}

export default useDebouncedValue;