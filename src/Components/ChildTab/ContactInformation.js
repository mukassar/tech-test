import React, { useState } from 'react'

export default function ContactInformation() {
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

    const { businessName, contactNumber, email, address } = formData;
    return (
        <div>ContactInformation
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
                <label>Contact Number</label>

                <input
                    value={contactNumber}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter your contact number"
                    type="text"
                    name="ContactNumber"
                    required
                />

                <label>Email</label>
                <input
                    value={email}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter your email address"
                    type="text"
                    name="email"
                    required
                />


                <label>Address</label>
                <textarea
                style={{width:"35rem"}}
                    
                    rows="7"
                    value={address}
                    onChange={e => updateFormData(e)}
                    placeholder="Enter your address here "
                    type="text"
                    name="address"
                    required
                ></textarea>
                <div>
                <button type="submit" className="btn">Back</button>
                <button type="submit" className="btn">Save and Continue</button>
                </div>
            </form>
        </div>
    )
}
