import React, { useState } from 'react'

export default function SupportDetails() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { support, supportDetails } = formData;
    return (
        <div>
            <h2>Support Details</h2>
            <label>Support Details</label>

            <input
                value={support}
                onChange={e => updateFormData(e)}
                placeholder="Ask for support here"
                type="text"
                name="support"
                required
            />
            <label>Enter Support Details</label>
            <textarea
                style={{ width: "35rem" }}

                rows="7"
                value={supportDetails}
                onChange={e => updateFormData(e)}
                placeholder="Enter details here "
                type="text"
                name="address"
                required
            ></textarea>
            <div>
                <button type="submit" className="btn">Back</button>
                <button type="submit" className="btn">Save and Continue</button>
            </div>

        </div>
    )
}
