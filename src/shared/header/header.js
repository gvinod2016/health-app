import usa from '../../image/usa-logo.png'
import phone from '../../image/phone-call.png'
import './header.css'
export default function Header() {
    return (
        <section className='sec-header'>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 hea-color">
                    <div className='py-1'>
                        <div className="py-2 d-flex ">
                            <div className='col-6 p-0 '>
                                <img className='w-75' src={usa} alt='usa-logo' />
                            </div>
                            <div className='col-6 p-0'>
                                <div className='d-flex align-items-center justify-content-end' >
                                    <div className='col-11 button a-color'>
                                        <a href='tel:0000000000' className='d-flex justify-content-center txt-dec-non p-2' >
                                            <img className='w-16' src={phone} />
                                            <p className=' pl-1 m-0 call'>Call Now</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}