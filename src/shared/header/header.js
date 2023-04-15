import usa from'../../image/usa-logo.png'
import './header.css'
export default function Header(){
    return(
        <section>
            <div className="d-flex jatify-content-center">
                <div className="col-5 hea-color">
                    <div>
                        <div className="p-2 d-flex ">
                            <div className='col-6 p-1'>
                                <img src={usa} alt='usa-logo' />
                            </div>
                            <div className='col-6'>
                                <div>
                                    <a ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}