import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>More About Me</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='./images/image-4.jpg'
                        text='Orlando' 
                        label='July 2022' 
                        path='/travel'
                    />
                    <CardItem 
                        src='./images/image-5.jpg'
                        text='Cancun' 
                        label='Dec 2019' 
                        path='/travel'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='./images/image-1.jpg'
                        text='Guitar' 
                        label='2021' 
                        path='/hobbies'
                    />
                    <CardItem 
                        src='./images/image-2.jpg'
                        text='Art' 
                        label='2017' 
                        path='/hobbies'
                    />
                    <CardItem 
                        src='./images/image-3.jpg'
                        text='Coding' 
                        label='2022' 
                        path='/hobbies'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;