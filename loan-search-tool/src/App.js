import logo from './logo.svg';
import './App.css';
import Loan from './components/Loan';
import { useState } from 'react';
import axios from 'axios';
import Loans from './components/Loans';
import Header from './components/Header';

const App = () => {

  const loans = [
    {
      id: 1,
      first_name: 'Holli',
      last_name: 'Jerrard',
      email: 'hjerrard0@salon.com',
      address: '204 Mallory Crossing',
      city: 'North Las Vegas',
      state: 'NV',
      zip: '89036',
      loan_number: '1246829304'
    },
    {
      id: 2,
      first_name: 'Jackie',
      last_name: 'Abram',
      email: 'jabram1@upenn.edu',
      address: '770 Nevada Parkway',
      city: 'Fort Wayne',
      state: 'IN',
      zip: '46814',
      loan_number: '1913356825'
    },
    {
      id: 3,
      first_name: 'Corney',
      last_name: 'Philippon',
      email: 'cphilippon2@home.pl',
      address: '02692 Eagle Crest Street',
      city: 'Trenton',
      state: 'NJ',
      zip: '08603',
      loan_number: '5782298774'
    },
    {
      id: 4,
      first_name: 'Annadiana',
      last_name: 'Walsham',
      email: 'awalsham3@phpbb.com',
      address: '45 5th Pass',
      city: 'Saint Louis',
      state: 'MO',
      zip: '63116',
      loan_number: '4194736516'
    },
    {
      id: 5,
      first_name: 'Christian',
      last_name: 'Ayre',
      email: 'cayre4@irs.gov',
      address: '65184 Main Pass',
      city: 'Cleveland',
      state: 'OH',
      zip: '44105',
      loan_number: '0297997394'
    },
    {
      id: 6,
      first_name: 'Lina',
      last_name: 'Tupman',
      email: 'ltupman5@examiner.com',
      address: '72355 Montana Way',
      city: 'Atlanta',
      state: 'GA',
      zip: '30392',
      loan_number: '0797814388'
    },
    {
      id: 7,
      first_name: 'Albrecht',
      last_name: 'Velti',
      email: 'avelti6@miitbeian.gov.cn',
      address: '965 Arkansas Circle',
      city: 'Port Saint Lucie',
      state: 'FL',
      zip: '34985',
      loan_number: '0115371400'
    },
    {
      id: 8,
      first_name: 'Katleen',
      last_name: 'Bronot',
      email: 'kbronot7@webs.com',
      address: '48696 Jenna Point',
      city: 'Miami',
      state: 'FL',
      zip: '33233',
      loan_number: '7847435098'
    },
    {
      id: 9,
      first_name: 'Sidonnie',
      last_name: 'Showalter',
      email: 'sshowalter8@tinypic.com',
      address: '681 Scott Junction',
      city: 'South Bend',
      state: 'IN',
      zip: '46614',
      loan_number: '9779152539'
    },
    {
      id: 10,
      first_name: 'Marylynne',
      last_name: 'Schruur',
      email: 'mschruur9@nature.com',
      address: '628 Thierer Crossing',
      city: 'Seattle',
      state: 'WA',
      zip: '98185',
      loan_number: '3724420692'
    },
    {
      id: 11,
      first_name: 'Cassi',
      last_name: 'Fillis',
      email: 'cfillisa@engadget.com',
      address: '91889 Nova Plaza',
      city: 'Atlanta',
      state: 'GA',
      zip: '30356',
      loan_number: '7888582540'
    },
    {
      id: 12,
      first_name: 'Harris',
      last_name: 'Moakler',
      email: 'hmoaklerb@hao123.com',
      address: '787 Butterfield Street',
      city: 'Kansas City',
      state: 'MO',
      zip: '64142',
      loan_number: '6896329718'
    },
    {
      id: 13,
      first_name: 'Millicent',
      last_name: 'Saing',
      email: 'msaingc@oaic.gov.au',
      address: '65103 Waywood Court',
      city: 'Houston',
      state: 'TX',
      zip: '77025',
      loan_number: '2758777614'
    },
    {
      id: 14,
      first_name: 'Kennan',
      last_name: 'Pershouse',
      email: 'kpershoused@census.gov',
      address: '5 Buell Court',
      city: 'Dallas',
      state: 'TX',
      zip: '75372',
      loan_number: '6033806697'
    },
    {
      id: 15,
      first_name: 'Ellary',
      last_name: 'Simo',
      email: 'esimoe@meetup.com',
      address: '5118 Caliangt Avenue',
      city: 'Washington',
      state: 'DC',
      zip: '20557',
      loan_number: '3717218492'
    }
  ]



  return (
    <div className='App'>
      <Header />
      <Loans loans={loans}/>
    </div>
  );
}

export default App;
