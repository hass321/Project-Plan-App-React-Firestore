import React from 'react';
import { Link } from 'react-router-dom';
//Custom Component
import ProjectSummary from './ProjectSummary';

export default (props) => {
    const { projects } = props;
    return(
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={`/project/${project.id}`}>
                        <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    )
}