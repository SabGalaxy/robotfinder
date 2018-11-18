import React from 'react';
import { Card } from './card';

export const CardList = ({ robots }) => {
    const cardItems = robots.map((robot,i) => {
         return <Card key={robot.id} name={robot.name} email={robot.email} />
    })
    return (
         <div>
             {cardItems}
         </div>
    )
}