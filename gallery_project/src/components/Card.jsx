import React from 'react'

const Card = ({ elem }) => { // Destructured props
    
    return (
        <div className='w-full relative group'>
            <a href={elem.url} target='_blank'>
                <div className='aspect-square overflow-hidden'>
                    <img 
                        className='h-full w-full object-cover transition-transform duration-300 hover:scale-110' 
                        src={elem.download_url} 
                        alt={elem.author} 
                    />
                </div>
                <div className='absolute bottom-0 left-0 w-full bg-black/60 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform'>
                    <h2 className='font-bold text-center text-xs truncate'>{elem.author}</h2>
                </div>
            </a>
        </div>
    )
}

export default Card