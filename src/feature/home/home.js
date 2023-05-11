import './home.css';
import Header from "../../shared/header/header";
import About from '../about/about';
import Health from '../health/health';
import Baner from '../baner/baner';
import Message from '../message/message';
import Work from '../work/work';
import Plans from '../plans/plans'
import Footer from '../../shared/footer/footer'
export default function Home() {
    return (
        <>
            <diV className="">
                <Header></Header>
                <About></About>
                <Health></Health>
                <Baner></Baner>
                <Message></Message>
                <Work></Work>
                <Plans></Plans>
                <Footer></Footer>
            </diV>
        </>
    )
}
