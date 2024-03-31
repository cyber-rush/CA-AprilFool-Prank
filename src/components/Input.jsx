
const Input = ({ label, type, placeholder, options }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <label>{label}</label>
            {
                type !== 'select' ?

                    (<input
                        type={type}
                        placeholder={placeholder}
                    />) :

                    (
                        <select>
                            <option value="" disabled selected>{placeholder}</option>
                            {
                                options.map(option => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))
                            }
                        </select>
                    )
            }
        </div>
    )
}

export default Input
