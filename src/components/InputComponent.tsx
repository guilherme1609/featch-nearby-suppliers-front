export default function InputComponent(props: any) {

	const {label, onChange, ...inputProps} = props;

	return (
		<>
			<label className='label-form'>{label}</label>
			<input {...inputProps} onChange={onChange}/>
		</>
	)
}
