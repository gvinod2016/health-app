import './about.css'
import stars from '../../image/stars.png'
export default function About() {
    return (
        <section className='sec-about'>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-5 py-2 box-shad">
                    <div className='d-flex justify-content-center'>
                        <img className='img ml-2 mt-1' src={stars} />
                        <p className='pl-1 ml-1 font-12 m-0 tex-bgc'>
                            Rated 4.9 stars based on <strong>1000+</strong> reviews.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}