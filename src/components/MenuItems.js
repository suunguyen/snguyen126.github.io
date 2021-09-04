import React from 'react';
import { projects } from '../fixtures/projects';

function MenuItems() {
    return (
        <div className='portfolis'>
            {projects.map((item) => {
                return (
                    <div className='portfolio' key={item.id}>
                        <div className='image-data'>
                            <img src={item.image} alt='' />
                        </div>
                        <a href={item.direction} target='_blank'>
                            {item.title}
                        </a>
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
