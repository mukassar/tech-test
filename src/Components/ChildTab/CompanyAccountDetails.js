import React, { useState } from 'react'

export default function CompanyAccountDetails() {
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

    const { businessName, GSTDetails, PANDetails, gstDocument, } = formData;
    return (
        <div>
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
                <label>GST Details</label>
                <input
                    value={GSTDetails}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter GST Number"
                    type="text"
                    name="GSTDetails"
                    required
                />
                <label>PAN Details</label>
                <input
                    value={PANDetails}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter PAN Details here "
                    type="text"
                    name="PANDetails"
                    required
                />

                <label>GST Document/ Legal Document</label>
                <p>Upload a GST registration certificate</p>
                <input
                    value={gstDocument}
                    onChange={e => updateFormData(e)}
                    placeholder="Add your business name or company name"
                    type="file"
                    name="gstDocument"
                    required
                />



                <button type="submit" className="btn">Back</button>
                <button type="submit" className="btn">Save</button>
                

            </form>
        </div>
    )
}
