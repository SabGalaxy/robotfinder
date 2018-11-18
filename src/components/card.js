import React from 'react';
import 'tachyons'

export const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green ma1 tc grow dib mw5 ba b--black-10 mv4">
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt={`${id}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>


    )
}