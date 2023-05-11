import './health.css'
import person from '../../image/qualified-users.png'
export default function health() {
    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 py-4 px-4 hea-color">
                    <div className='text-center pt-3 fw-600 color-1'>
                        <div className='mb-3'>
                            <h4 className='fw-800'>4 out of 5</h4>
                        </div>
                        <div>
                            <img  className='w-48' src={person} />
                        </div>
                        <div className='py-3'>
                            <h4 className='fw-800'> Qualify for Health Insurance under $10/mo.</h4>
                        </div>
                    </div>
                    <div className='p-4 mb-2 radirs-10 bg-color-1 box-sha text-center'>
                        <div className='mb-3'>
                            <h4 className='color-2 fw-400'>Are you younger than 65?</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='bg-color-2 answer px-4 radirs-7 py-2 mr-4'>
                                <div className='px-3 '><a className=' fw-500 a answer' href='#'>Yes</a></div>
                            </div>
                            <div className='bg-color-2 answer radirs-7 px-4 py-2'>
                                <div className='px-3  '><a className=' fw-500 a answer' href='#'>No</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}