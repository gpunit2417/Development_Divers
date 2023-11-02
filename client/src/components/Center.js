import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Center() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    function clickHandler() {
        //move to AddProject page
        navigate('/AddProject');
    }
    function loggingIn() {
        // navigate('/Login');
        setIsLoggedIn(!isLoggedIn);

    }
    return (
        <div>
            <div className='center'>
                <h1 className="title"><i>Issue Tracker</i></h1>
                <button id='btn' className='login' onClick={loggingIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>

            <div className="projects">
                <h2 className='yourproject'>Your Projects</h2>
                <button className="add" onClick={clickHandler}>Add Project <AiOutlinePlus className='issueplus' /></button>
                <button className="remove" >Remove Project</button>
                <button className="update" >Update Project</button>
            </div>
            <div>
                <section className="projectname"></section>
            </div>
        </div>
    )
}

export default Center


