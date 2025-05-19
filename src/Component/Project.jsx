import React from 'react'

const Project = ({title, img, desc, link}) => {
    return (
        <div>
            <div className="project">
                <h3>{title}</h3>
                <img src={img} alt="" className='projectPhoto' />
                <p className="descripition">
                    {desc}
                </p>
                <a href={link} target="_blank">Clique para acessar</a>
            </div>
        </div>
    )
}

export default Project