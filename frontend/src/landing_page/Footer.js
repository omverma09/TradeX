import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5 footer-a'>
          <div className='col'>
            <h3 style={{ marginLeft: "4rem", color: "#0D6EFD", fontWeight: "800" }}>TradeX</h3>
            <p> &copy; 2010 - 2025, Not TradeX Broking Ltd. All right reserved.</p>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            
          </div>
          <div className='col'>
            <h5>Company</h5>
            <Link href=''>About</Link><br />
            <Link href=''>Product</Link><br />
            <Link href=''>Pricing</Link><br />
            <Link href=''>Referral programe</Link><br />
            <Link href=''>Careers</Link><br />
            <Link href=''>TradeX,tech</Link><br />
            <Link href=''>Press & media</Link><br />
          </div>
          <div className='col'>
            <h5>Support</h5>
            <Link href=''>Contact</Link><br />
            <Link href=''>Support and portal</Link><br />
            <Link href=''>Z-Connect blog</Link><br />
            <Link href=''>List of charges</Link><br />
            <Link href=''>Download and Resources</Link><br />
          </div>
          <div className='col'>
            <h5>Accounts</h5>
            <Link href=''>Open an Account</Link><br />
            <Link href=''>Fund transfer</Link><br />
            <Link href=''>60 days challange</Link><br />
          </div>
        </div>

        <div className='mt-5 fs-7 text-small text-muted'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus quas aperiam earum, consequuntur fugit quisquam. Totam, earum eius. Minus ad eveniet perspiciatis neque iste dolore distinctio provident itaque nisi Lorem ipsum dolor sit amet consectetur impedit elit. Accusantium iure vel soluta quis temporibus, quo officia nam aliquam minima impedit beatae facere deleniti harum necessitatibus libero sed voluptatem. Esse, sint.</p>

          <p>impedit ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus quas aperiam earum, consequuntur fugit quisquam. Totam, earum eius. Minus ad eveniet perspiciatis neque iste dolore distinctio provident itaque nisi!</p>

          <p>ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus quas aperiam earum, consequuntur fugit quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure vel soluta quis temporibus, quo officia nam aliquam minima impedit beatae facere deleniti harum necessitatibus libero sed voluptatem. Esse, sint. Totam, earum eius. Minus ad eveniet perspiciatis neque iste dolore distinctio provident itaque nisi!</p>

          <p>consequuntur  ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus quas aperiam earum, consequuntur fugit quisquam. Totam, earum eius. Minus ad eveniet perspiciatis neque iste dolore distinctio provident itaque nisi!</p>
        </div>
      </div>
    </footer>
  )
}
