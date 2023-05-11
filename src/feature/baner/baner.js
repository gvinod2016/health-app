import './baner.css'
import loges from '../../image/carriers.png'
export default function Baner() {
    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 pt-4 pb-3 text-center bg-color">
                    <img className='col-xl-9 col-12  p-0' src={loges} alt='carriers'/>
                </div>
            </div>
        </section>
    )
}