import { Link } from 'react-router-dom';
import Vector from '../assets/Vector.png';

function About() {
    return (
        <div className="bg-gradient-to-r from-[#040D12] to-[#1B5778] bg-repeat-y w-full h-screen about-page">

            <img src={Vector} alt="vector" className="xl:block top-1/4 absolute hidden ml-24 -translate-y-1/3" />


            <div className="top-1/4 absolute lg:ml-0 xl:ml-20">
                <h1 className="font-black text-7xl text-center text-slate-200 sm:text-8xl sm:text-center md:text-9xl md:text-center lg:text-9xl xl:text-left xl:text-9xl">About me</h1>
                <p className='mx-auto sm:mx-auto md:mx-auto sm:mt-8 xl:mt-2 xl:ml-0 w-2/3 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 text-center text-slate-100 text-xl sm:text-2xl sm:text-center md:text-xl md:text-center lg:text-2xl xl:text-left'>
                    Bun venit pe site-ul lui <span className='font-black text-4xl text-custom-orange'> Alex Marin </span>! Sunt un artist digital pasionat, dedicat să aduc la viață 
                    imaginația prin artă. Cu o experiență bogată în diverse stiluri și tehnici, creez lucrări unice
                    care inspiră și provoacă gândirea. 
                    Explorează portofoliul meu pentru a descoperi creațiile mele și nu ezita să mă contactezi pentru
                    colaborări sau comenzi personalizate.
                </p>
                <p className='xl:float-left xl:flex sm:justify-center md:justify-center lg:justify-center grid sm:grid lg:grid md:mx-auto lg:mx-auto mt-8 sm:mt-8 md:mt-8 lg:mt-4 xl:mt-6 md:w-2/3 font-bold text-center text-slate-100 sm:text-xl md:text-2xl xl:text-lg lg:text-xl text'>
                    Daca vrei sa afli mai multe despre mine :<br/>
                    <span className='mt-8 font-normal lg:font-bold text-green-400 sm:text-green-400 sm:text-xl md:text-green-400 xl:text-lg lg:text-green-400 hover:text-slate-600 transition-all'>
                        <Link to={'https://www.instagram.com/alexmarinart/'} target='_blank'>
                            https://www.instagram.com/alexmarinart/
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default About
