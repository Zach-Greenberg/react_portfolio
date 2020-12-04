import React from 'react';
import Project from './Project';
import portfolio from '../portfolio.json';

function Portfolio() {
    return (
        <main className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className="row">
                {
                    portfolio.map(item => {
                        return (
                            <Project info={item} />
                        )
                    })
                }
            </div>
        </main>
    )
}
export default Portfolio;