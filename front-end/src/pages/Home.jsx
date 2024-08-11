import { useNavigate } from "react-router-dom";
import Vector from '../assets/Vector.png';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-[#040D12] to-[#1B5778] bg-repeat-y w-full h-screen home-page">
        
            <img src={Vector} alt="vector" className="xl:block top-1/4 absolute hidden ml-24 -translate-y-1/3" />

            <div className="relative top-16 sm:top-20 md:top-20 lg:top-1/6 xl:top-1/6 mx-auto sm:pt-16 md:pt-32 lg:pt-32 w-4/5 sm:w-2/3 md:w-2/3 lg:w-4/5 xl:w-4/5 lg:text-center">
                <h1 className="font-black font-sans text-2xl text-center text-custom-green sm:text-4xl sm:text-center md:text-5xl lg:text-6xl lg:text-center xl:text-left xl:text-7xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Creativitate Digitala <span className="text-stone-200">-</span>
                    <span className="text-custom-pink"> Portofoliul </span><br/>
                    <span className="text-stone-200"> lui </span>
                    <span className="pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-16 text-3xl text-front text-transparent sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl"> Alex Marin</span>
                </h1>

                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    <h3 className="font-bold text-center text-sm text-stone-200 sm:text-xl sm:text-center md:text-2xl lg:text-xl lg:text-center xl:text-left xl:text-2xl">
                        <span className="text-custom-pink-sec">Bun venit</span> în universul creativității digitale al lui Alex Marin!
                    </h3>

                    <p className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:ml-0 sm:w-full md:w-full xl:w-3/4 text-center text-slate-100 text-sm sm:text-lg sm:text-center md:text-xl md:text-center lg:text-lg lg:text-center xl:text-left">
                        <span className="font-normal text-custom-blue">Explorează portofoliul impresionant</span> al lui Alex Marin, un artist digital recunoscut 
                        pentru imaginația sa debordantă și abilitățile sale tehnice de excepție. 
                        Fiecare lucrare este o expresie unică a talentului și pasiunii pentru arta vizuală, 
                        reflectând o gamă variată de stiluri și tehnici.
                    </p>

                    <div className="mdfloat-left xl:float-left flex justify-center mt-4 sm:mt-6">
                        <button 
                            onClick={() => navigate('/projects')} 
                            className="bg-slate-700 hover:bg-slate-600 bg-opacity-35 drop-shadow-2xl px-4 sm:px-6 md:px-8 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-6 rounded-3xl font-bold text-base text-stone-200 sm:text-lg md:text-xl transition-all animate-pulse duration-300 delay-50 hover:scale-105"
                        >
                            Exploreaza lucrarile &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
