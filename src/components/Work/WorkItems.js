import React from 'react';

const WorkItems = ({item}) => {
    return (
        <div className='work__card' key={item.id}>
            <img src={item.image} alt='' className='work__img' />
            <h3 className='work__title'>{item.title}</h3>
           <div className='work__button-group'>
           <a href={item.live} className='work__button'>
                Live <i className='bx bx-right-arrow-alt'></i>
            </a>
            <a href={item.frontend} className='work__button'>
                Frontend code <i className='bx bx-right-arrow-alt'></i>
            </a>
            <a href={item.backend} className='work__button'>
                Backend code <i className='bx bx-right-arrow-alt'></i>
            </a>
           </div>
        </div>
    );
};

export default WorkItems;