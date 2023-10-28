import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

function Center() {
    return (
        <div>
            <div className='center'>
                <h1 className="title">Issues Tracker</h1>
                <div className="add">Add Projects <AiOutlinePlus className='issueplus' /></div>
            </div>

            <div className="projects">
                <h2 className='yourproject'>Your Projects</h2>
                <section className="projectname"></section>
            </div>
        </div>
    )
}

export default Center
