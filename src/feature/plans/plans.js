import './plans.css';
import checking from '../../image/svg/health-check.svg'
export default function Plans() {
    return (
        <section>
            <div className=" d-flex justify-content-center">
                <div hr className="col-12 col-md-9 col-lg-7 col-xl-5 px-xl-5 py-xl-4 py-3 blr">
                    <div className='text-center'>
                        <img className='w-20' src={checking} alt='checking'/>
                    </div>
                    <div className=' text-center'>
                        <h5 className='fw-700 mb-2'>About ACA Health Plans</h5>
                    </div>
                    <div className='px-xl-4'>
                        <div className='px-1 px-xl-2'>
                            <div className='py-2 '>
                                <p className='m-0 ft-size-12'>Nearly 16 million people signed up for this government give-back program,
                                    a record high since previous years.The big reason is that the plans are cheaper for people than they
                                    used to be..</p>
                            </div>
                            <div>
                                <p className='m-0 ft-size-12'>The federal government has pumped billions of dollars in recent years into subsidies to keep costs down for consumers.
                                 Health officials say 4 out of 5 enrollees qualify for plans that cost $10 or less per month.</p>
                            </div>
                            <div className='py-2 '>
                                <p className='m-0 ft-size-12'>And 5 million people who are uninsured qualify for zero dollar premium plans.
                                 <strong className='m-0 fw-600 ft-size-12'>Are you part of the 5 million?</strong>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}