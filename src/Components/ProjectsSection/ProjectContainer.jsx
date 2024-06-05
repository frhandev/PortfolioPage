import styles from './projectsSection.module.css'
import abef from "./xyz.png"
import React, { useState } from 'react'


function ProjectContainer({
    projectImage = abef,
    projectTitle = "Project Title",
    projectDiscreption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque tincidunt hendrerit.",
    projectLink = "#",
}) {

    const [active, setActive] = useState(styles.projectContainer);
    const hover = () => {
        active === styles.projectContainer
            ? setActive(styles.projectContainer + ' ' + styles.projectContainer_active)
            : setActive(styles.projectContainer)
    };


    return (
        <div onMouseEnter={hover}   onMouseLeave={hover}
         className={active}>
            <div className={styles.imageContainer}>
                <img className={styles.projectPreview} src={projectImage} alt="Project preview" />
            </div>
            <h3>{projectTitle}</h3>
            <p>{projectDiscreption} <br />
            <a className={styles.seeProject} href={projectLink}>See Project</a>
            </p>
        </div>
    );
}

export default ProjectContainer