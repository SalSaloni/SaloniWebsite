import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ pro }) => {
    return (
        <div>
            {pro.map(pro => (
                <ProjectCard id={pro.name} proData={pro}/>
                                )      
                )}
        </div>
    );
}

export default ProjectsList;