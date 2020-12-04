import React from 'react';

function Project(props) {
    return (
        <div className='col-sm-6'>
            <div className='card'>
                <img src={props.info.image} className='card-img-top' alt={props.info.name} height='300px' width='300px'/>
                <div className='card=body'>
                    <h4 class="card-title">{props.info.name}</h4>
                    <p class="card-text">{props.info.description}</p>
                    <p class="card-text">{props.info.technologies}</p>
                    <a href={props.info.github} target="_blank" rel="noreferrer">GitHub</a> | <a href={props.info.deployed} target="_blank" rel="noreferrer">Deployed</a>
                </div>
            </div>
        </div>
    )
}
export default Project;