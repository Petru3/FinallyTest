/* eslint-disable react/prop-types */
function Project({ vector }) {
    return (
        <>
            <img 
                src={vector} 
                alt="vector" 
                className="xl:block top-1/4 absolute hidden ml-24 -translate-y-1/3" 
            />

            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:ml-0 lg:px-12 pt-32 sm:pt-36 md:pt-38 lg:pt-48 xl:pt-64 lg:w-2/3 xl:text-left">
                <h1 className="font-extrabold text-5xl text-center text-slate-100 sm:text-center sm:text-5xl md:text-5xl md:text-center lg:text-5xl xl:text-5xl">
                    <span className="font-extrabold text-custom-pink22 sm:text-center sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl xl:text-left">Explorează</span> Lucrările Mele
                </h1>
                <p className="mx-8 sm:mx-6 md:mx-auto sm:mt-6 lg:mt-8 xl:mt-10 md:w-4/5 lg:w-full font-normal text-center text-slate-100 text-xl sm:text-center md:text-center md:text-2xl lg:text-2xl xl:text-left xl:text-xl">
                    Bun venit în secțiunea dedicată lucrărilor mele! Aici vei descoperi o colecție diversificată de creații digitale, 
                    fiecare reflectând pasiunea și imaginația care definesc arta mea. 
                    De la peisaje futuriste la portrete expresive și lumi fantastice, 
                    fiecare lucrare este realizată cu atenție la detalii și o viziune unică.
                    Fiecare piesă spune o poveste și invită la o călătorie vizuală captivantă. 
                    Dacă ești interesat de comenzi personalizate sau colaborări, nu ezita să mă contactezi.
                </p>
                <p className="sm:mt-6 lg:pt-8 xl:w-2/3 font-semibold text-center text-custom-green-lucky sm:text-center md:text-center md:text-2xl xl:text-xl xl:text-left hover:text-green-600 tracking-wide animate-pulse cursor-pointer">
                    Bucură-te de explorare și lasă-te inspirat (Scroll Down)
                </p>
            </div>
        </>
    );
}

export default Project;
