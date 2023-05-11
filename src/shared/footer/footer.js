import './footer.css'
export default function Footer() {
    return (
        <section>
            <div className=" d-flex justify-content-center">
                <div hr className="col-12 col-md-9 col-lg-7 col-xl-5 px-4 py-2 text-center blr bg-color">
                    <div className='py-2 '>
                        <p className='color-p fw-300 ft-size-12'>This site is not a part of the Facebook™ website or Facebook™ Inc.
                         Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p>
                    </div>
                    <div>
                        <p className=' color-p fw-300 ft-size-12'>By interacting with this website I consent to the Privacy Policy and Terms & Conditions and allow you, your partners like Uprolls Digital LLC, subsidiaries, and/or agents to contact me using automated methods (automatic dialing systems, artificial or prerecorded voice messages, text messages and emails) to send recurring marketing calls or text to my number that I provided, even if provided number is on a do not call list. I agree my consent is not a condition to get any services offered by this website or by its partners. I can opt-out from communications at any time.
                         For SMS campaigns: Text STOP to cancel and HELP for help. Msg & data rates may apply.</p>
                    </div>
                    <div className='mb-2 d-flex justify-content-center'> 
                        <a href='#' className='color-f fw-300 ft-size-12 privacy'>Privacy Policy </a> 
                        <div className='d-flex align-items-center w-3 mx-1'> <div className=' w-100  bb-1'> </div></div>
                        <a href='#' className='color-f fw-300 ft-size-12 privacy'>Terms And Conditions </a>
                        <div className='d-flex align-items-center w-3 mx-1'> <div className=' w-100  bb-1'> </div></div>
                        <a href='#' className=' color-f fw-300 ft-size-12 privacy'>Do Not Sell My Information</a>
                    </div>
                </div>
            </div>
        </section>
    )
}