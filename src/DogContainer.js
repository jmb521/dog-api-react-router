import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const DogContainer = (props) => {
    const doggies = props.dogs.map((dog, id) => (
        <div>
            <Link key={id} to={`/dogs/${id}`}>
                Doggie
            </Link>
            <br />
        </div>  
    ))


    return(
       <div>

           {doggies}  
       </div>
            
    
    )
    
    
}

export default DogContainer