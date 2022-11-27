import React, { useState } from "react";

import "./basic.css";

const BasicInformation = () => {

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

    const { businessName, brandName, country, instagram,ownWebsite,fiver,relevantWebsite} = formData;


    return (
        <div className="basic__information__main">
            <div className="basic__information">
                <div style={{ textAlign: "left", color: 'blue', marginLeft: "5px" }}>

                    <h5>Basic Information</h5>
                </div>
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
                    <label>Company logo/ profile Image</label>
                    <p>Upload a professional logo of profile image</p>
                    <input
                        value={businessName}
                        onChange={e => updateFormData(e)}
                        placeholder="Add your business name or company name"
                        type="file"
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


                    <label>Country</label>
                    <input
                        value={country}
                        onChange={e => updateFormData(e)}
                        placeholder="Select your country "
                        type="text"
                        name="country"
                        required
                    />
                    <div>
                        <h3>Socal media Handles</h3>
                        <div className="SocalMediaMain">

                            <div className="socialMediaItem">
                                <label>Instagram</label>
                                <input className="socialMediaInputs"
                                    value={instagram}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Add link "
                                    type="text"
                                    name="instagram"
                                    required
                                />
                            </div>

                            <div className="socialMediaItem">
                                <label>Own Website</label>
                                <input className="socialMediaInputs"
                                    value={ownWebsite}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Add link "
                                    type="text"
                                    name="ownWebsite"
                                    required
                                />

                            </div>
                            <div className="socialMediaItem">
                                <label>Fiver</label>
                                <input className="socialMediaInputs"
                                    value={fiver}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Add link "
                                    type="text"
                                    name="fiver"
                                    required
                                />

                            </div>
                            <div className="socialMediaItem">
                                <label>Relevant Website</label>
                                <input className="socialMediaInputs"
                                    value={relevantWebsite}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Add link "
                                    type="text"
                                    name="relevantWebsite"
                                    required
                                />

                            </div>

                        </div>
                    </div>
                    <button type="submit" className="btn">Save and Continue</button>
                </form>
            </div>
            <div className="quick__guide">
                <h2>Quick Guide</h2>
                <ul>
                    <li>Upload good quality profile picture</li>
                    <li>Add relevant category tags</li>
                    <li>A short description about company</li>
                    <li>Add your company details</li>
                    <li>Add company social links</li>
                </ul>
                <div>
                    <h2>Finding it difficult to create your profile</h2>
                    <button id="exampleProfile">See example profile here</button>
                </div>
            </div>

        </div>

    );
};

export default BasicInformation;
