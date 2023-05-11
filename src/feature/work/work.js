import './work.css'
export default function Work(){
    return(
        <section>
            <div className=" d-flex justify-content-center">
                <div hr className="col-12 col-md-9 col-lg-7 col-xl-5 px-xl-5 py-3 py-xl-4 bg-color">
                   <div className=' text-center'>
                        <h5 className='fw-700 mb-2'>How It Works</h5>
                   </div>
                   <div className='px-xl-4'>
                        <div className=' px-2'>
                            <div className='py-2 px-3 b-radies bg-color-w'>
                                <p className='m-0 ft-size-12'>✅ Step 1 - Qualify online at CoveredUSA.</p>
                            </div>
                            <div className='py-2 px-3 b-radies bg-color-w my-2'>
                                <p className='m-0 ft-size-12'>✅ Step 2 - Call in to speak with a licensed agent for your area.</p>
                            </div>
                            <div className='py-2 px-3 b-radies bg-color-w'>
                                <p className='m-0 ft-size-12'>✅ Step 3 - Discover health plans that are $10 or less per month.</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}