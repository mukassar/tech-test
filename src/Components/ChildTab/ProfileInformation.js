import React, { useState } from 'react'

export default function ProfileInformation() {
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

    const { businessName, brandName, businessDetails, } = formData;
    return (
        <div>
            <h2>Profile Information</h2>
            <form>

                <label>Business Name/ Company Name</label>

                <input
                    value={businessName}
                    onChange={e => updateFormData(e)}
                    placeholder="Add your business name or company name"
                    type="text"
                    name="businessName"
                    required
                />


                <label>Brand or Alias Name</label>
                <input
                    value={brandName}
                    onChange={e => updateFormData(e)}
                    placeholder="Add your brand or alias name"
                    type="text"
                    name="brandName"
                    required
                />


                <label>Nature Of Business</label>
                <textarea
                    style={{ width: "35rem" }}
                    rows="7"
                    value={businessDetails}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter information about your business "
                    type="text"
                    name="businessDetails"
                    required
                />
                <div>
                    <button type="submit" className="btn">Back</button>
                    <button type="submit" className="btn">Save and Continue</button>
                </div>
            </form>
        </div>
    )
}
