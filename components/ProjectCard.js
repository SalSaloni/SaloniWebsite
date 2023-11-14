import React from "react";

const ProjectCard = ({ projects }) => {
    return(
        <div>
            <h2>{projects.name}</h2>
            <p>{projects.link}</p>
            <p>{projects.description}</p>
        </div>
    );
}

export default ProjectCard;