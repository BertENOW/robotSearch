import React from 'react'

const Card = (props)=>{
    return(
        <div className='bg-light-blue ba ma3 br4 dib pa4 shadow-5 tc grow'>
            <img alt = 'robots' src={`https://robohash.org/${props.name}?200x200`}/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}
export default Card