import React from 'react'
import getRandomLocation from "../utils/getRandomLocation";

const Page404 = ({setNumberLocation}) => {
    return (
        <div className='app__error-container'>
            <h2 className="app__error">
                ❌ Hey! you must provide an id from 1 to 126 🥺
            </h2>
            <button className='error__btn' onClick={()=>{
                setNumberLocation(getRandomLocation());
            }}>RETURN TO A KNOWN UNIVERSE</button>
            <img className="error__404" src="404.jpg" alt="Page 404" />
        </div>
    )
}

export default Page404