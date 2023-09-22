import { useState } from "react"

export default function UserForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" })
    const updateData = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    return (
        <div>
            <label htmlFor="first-name">First Name:</label>
            <input type="text"
                placeholder="first name"
                onChange={updateData}
                id="first-name"
                name="firstName"
                value={formData.firstName}
            />
            <label htmlFor="last-name">Last Name:</label>
            <input type="text"
                placeholder="last name"
                onChange={updateData}
                id="last-name"
                name="lastName"
                value={formData.lastName}
            />
            <label htmlFor="password">Password:</label>
            <input type="password"
                placeholder="password"
                onChange={updateData}
                id="password"
                name="password"
                value={formData.password}
            />
        </div>
    )
}