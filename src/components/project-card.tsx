import { ReactNode, useState } from "react";
import { IProjectCard } from "../interface";


const ProjectCard = (props: IProjectCard) => {
    let [projectName, setProjectName] = useState(props.projectName);
    let [projectDesription, setProjectDesription] = useState(props.projectDesription);
    let [sitePath, setSitePath] = useState(props.sitePath);
    let [repositoryPath, setRepositoryPath] = useState(props.repositoryPath);
    let [imagePath, setImagePath] = useState(props.imagePath);
    let [techStackIcons, setTechStackIcons] = useState(props.techStackIcons);
    return (
        <>
            <div className="min-w-full min-h-full max-w-sm bg-white border border-gray-200 shadow rounded-tr-lg rounded-bl-lg">
                <a href="#">
                    <img className="rounded-tr-lg" src={imagePath} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 contentText text-black font-bold">{projectName}</h5>
                    </a>
                    <p className="mb-3 contentText text-black">{projectDesription}</p>
                    {
                        sitePath ?
                            <a href={sitePath} target="_blank" className="mb-3 mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                                Visit the site
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            :
                            <></>
                    }
                    {
                        repositoryPath ?
                            <a href={repositoryPath} target="_blank" className="mb-3 mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                                Repository
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            :
                            <></>
                    }
                    <p className="mb-3 flex gap-2">
                        {
                            techStackIcons?.map((techStackIcon: ReactNode) =>
                                techStackIcon
                            )
                        }
                    </p>
                </div>
            </div>


        </>



    );
};

export default ProjectCard;

