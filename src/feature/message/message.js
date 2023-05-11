import './message.css'
import user from '../../image/rebecca.png'
export default function Message() {
    return (
        <section>
            <div className=" d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 px-xl-5 py-3 blr ">
                    <div className='px-xl-3 pt-xl-2 d-flex'>
                        <div className='col-xl-3 col-2 p-0  pl-xl-3 pl-lg-0'><img className='radies-50 col-12 p-0' src={user} alt='rebecca' /></div>
                        <div className='col-xl-9 col-10 pl-0 pr-lg-0 pr-xl-3 ml-3'>
                            <p className='ft-size-12 fw-300 mb-2'>"Luke is amazing! He's helped me with
                                health insurance needs the past couple
                                years.Not only is he extremely responsive,
                                but he also goes above and beyond in helping
                                you with whatever you need. Thanks Luke!"

                            </p>
                            <p className='ft-size-12 fw-500 mb-0'>Karelle T</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}