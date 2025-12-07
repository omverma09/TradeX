import React from 'react'

export default function Disclaimer() {
  return (
    <div className='container border-top p-4'>
        <div className='row p-3'>
            <h5 className='fs-5'>Disclaimer</h5>
        </div>
        <div className='row'>
            <p className='text-muted'style={{fontSize:".85rem"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
    </div>
  )
}
