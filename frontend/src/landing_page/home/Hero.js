import React from 'react';


function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src ='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-0'>    Invest in Everything</h1>
                <p>Online platform to invest in stock, derivatives,matual fund and more</p>
                <button class = 'p-2 btn btn-primary fs-5 mb-5' style = {{width: "15%", margin: "0 auto"}}>signup now</button>
            </div>

        </div>
    );
}

export default Hero;


 

