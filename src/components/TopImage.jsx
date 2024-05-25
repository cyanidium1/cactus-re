import React from 'react';

function TopImage(props) {
    return (
        <div className="slides" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <div className="slide slide-1">

                <img src="/images/slider1.jpg" alt="slider image 1" />
            </div>
            <div className="slide slide-2">
                <img src="/images/slider2.jpg" alt="slider image 2" />
            </div>
            <div className="slide slide-3">
                <img src="/images/slider3.jpg" alt="slider image 3" />
            </div>
            <div className="text-center absolute inset-0 flex flex-col items-center justify-center">
                <div className='mb-20'>
                    <h1 className='text-5xl text-white font-bold'>Ключи от квартиры вашей мечты <br />на побережье Средиземного моря</h1>
                    <p className='text-xl text-white mt-2 text-right'>...близко как никогда :)</p>
                </div>
            </div>

            <svg
                className='fill-white dark:fill-black'
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 2372 144"
                style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150%',
                }}
            >
                <path d="M237 95.5V129h1897V63h-2.7c-1.6 0-10.2.7-19.3 1.5-22.2 1.9-89.7 7-126 9.5-492.4 33.3-1102.6 33.3-1595 0-50.9-3.5-137.5-10.1-149.2-11.5l-4.8-.6z" />
            </svg>
        </div>
    );
}

export default TopImage;
