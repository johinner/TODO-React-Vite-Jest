import { useState } from "react"

export const useForm = (inicialForm = {}) => {
    
    const [formState, setFormState] = useState(inicialForm)

    const datoInput = ({target}) => {
        const {name, value} =  target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const vaciarForm = () => {
        setFormState(
            inicialForm
        )
    }

    return {
        ...formState,
        datoInput,
        vaciarForm
    }
}