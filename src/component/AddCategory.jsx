import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputEmpty, setInputEmpty] = useState('')

    const inputChanged = ({ target }) => {
        // console.log(target.value);
        setInputEmpty(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputEmpty.trim().length <= 0)
            return
        /**
         * function for clean the input
         */
        // console.log(inputEmpty)
        // setCategories((categories => [inputEmpty, ...categories]))
        onNewCategory(inputEmpty.trim())
        setInputEmpty('')
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="search for gif"
                value={inputEmpty}
                onChange={inputChanged}
            />
        </form>
    )
}
