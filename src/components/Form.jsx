import inputs from "../util/data"
import Header from "./Header"
import Input from "./Input"
import love from "./../assets/love.jpg"

const Form = () => {
    return (
        <div className="my-8 py-8 mx-32 rounded-md relative bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${love})` }}>
            <Header />
            <form>
                {
                    inputs.map(input => (
                        <Input
                            key={input.id}
                            label={input.label}
                            type={input.type}
                            placeholder={input.placeholder}
                            options={input.options}
                        />
                    ))
                }
            </form>
        </div>
    )
}

export default Form
