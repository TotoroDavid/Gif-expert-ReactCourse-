import { useState } from "react"
import { AddCategory, GifGrid } from './component'
/** import barrel files */

export const App = () => {

    const [categories, setCategories] = useState(['DragonBall'])
    // console.log(categories);

    const onAddCategory = (newCategory) => {
        /**func for don't repeat a category*/
        if (categories.includes(newCategory)) { return }
        // console.log(newCategory);
        setCategories([newCategory, ...categories])
        // setCategories(newCategory => [...newCategory, 'new category'])
    }

    return (
        <>
            <h1>GifAppExpert</h1>
            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                // onNewCategory={(e) => onAddCategory(e)}
                onNewCategory={onAddCategory}
            />
            {/* list */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
