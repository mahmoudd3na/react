import { useState } from "react"

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const [isValid, setIsValid] = useState(false);

    const validation = (product) => {
        if (product.length === 0)
            setIsValid(false);
        else setIsValid(true);
    }

    const updateData = (evt) => {
        if (evt.target.name === "product")
            validation(evt.target.value)

        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product :</label>
                <input
                    type="text"
                    placeholder="product"
                    id="product"
                    name="product"
                    onChange={updateData}
                    value={formData.product}
                />{
                    !isValid && <h2 style={{ color: "red" }}>product name cant be empty</h2>

                }
                <label htmlFor="quantity">Quantity :</label>
                <input
                    type="number"
                    placeholder="quantity"
                    id="quantity"
                    name="quantity"
                    onChange={updateData}
                    value={formData.quantity}
                />
                <button>Submit</button>

            </form>

        </>
    )
}