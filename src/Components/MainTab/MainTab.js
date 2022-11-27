import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInformation from "../ChildTab/BasicInformation";
import CompanyAccountDetails from "../ChildTab/CompanyAccountDetails";
import ContactInformation from "../ChildTab/ContactInformation";
import ProfileInformation from "../ChildTab/ProfileInformation";
import SupportDetails from "../ChildTab/SupportDetails";

const types = ['Basic Information', 'Profile Information', 'Contact Information', 'Support Details', 'Company Account Details'];
export default function MainTab() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      {
        active.includes('Basic Information') ? <BasicInformation />
          :
          active.includes('Company Account Details') ? <CompanyAccountDetails />
            :
            active.includes('Contact Information') ? <ContactInformation />
              :
              active.includes('Profile Information') ? <ProfileInformation />
                :
                active.includes('Support Details') && <SupportDetails />
      }
    </>
  );
}


const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    background-color: palevioletred;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;