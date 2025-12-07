import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount';
import Disclaimer from './Disclaimer';
import Charges from './Charges';

export default function PricingPage() {
  return (
    <> 
       <Hero/>
       <OpenAccount/>
       <Brokerage/>
       <Disclaimer/>
       <Charges/>
    </>
  )
}
