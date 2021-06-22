import React from 'react' 

const DogShow = ({dogs, match}) => {
    return(
        <div>
            <img src={dogs[match.params.id]} alt="dog" />
        </div>
    )
}

export default DogShow