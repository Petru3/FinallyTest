import { useEffect, useState } from "react";
import Vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

import Project from "../components/Project";
import Loading from "../ui/Loading";

const API_PATH = 'http://localhost:3000/api/data';

function Projects() {
    // State to store project data
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch projects from API
    const fetchProjects = async () => {
        try {
            const response = await fetch(API_PATH);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch projects when component mounts
    useEffect(() => {
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-r from-[#040D12] to-[#1B5778] min-h-screen">
                <Loading />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-r from-[#040D12] to-[#1B5778] min-h-screen">
                <Project vector={Vector} />
            </div>
        );
    }

    const iconSite = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#608EE2" className="mt-2 size-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
    );

    return (
        <div className="bg-gradient-to-r from-[#040D12] to-[#1B5778] min-h-screen">
            <Project vector={Vector} />

            {projects.length > 0 ? (
                <div className="mx-auto px-4 py-12 container">
                    <h2 className="font-black text-4xl text-center text-slate-100">Lucrări</h2>
                    <div className="gap-8 grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-8">
                        {projects.map((project) => (
                            project.status && (
                                <div key={project.id} className="flex md:flex-row flex-col items-center gap-4 bg-slate-800 bg-opacity-25 hover:bg-opacity-50 p-4 rounded-lg transition-all">
                                    <div className="w-full md:w-1/2">
                                        <h2 className="font-bold text-slate-100 text-xl">Titlul lucrării: {project.title}</h2>
                                        <p className="mb-6 font-medium text-lg text-slate-100">{project.description}</p>
                                        <Link to={project.linkUrl} target="_blank" className="flex items-center text-slate-100 hover:text-green-600">
                                            <span className="font-bold text-xl hover:text-slate-600">View on Site</span>
                                            {iconSite}
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-center w-48 md:w-1/2">
                                        <img src={project.imageUrl} alt={project.title} className="rounded-lg w-auto h-auto" />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            ) : (
                <p className="relative top-1/3 xl:mt-12 lg:pt-8 font-bold text-2xl text-center text-slate-100">Please create a Project and return right here...</p>
            )}
        </div>
    );
}

export default Projects;
