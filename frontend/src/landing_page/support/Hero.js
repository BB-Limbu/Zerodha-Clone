import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id ="supportHero">
            <div className='p-5 ' id = "supportWrapper">
                <h4>Support Portal</h4>
                <a href = "#">Track Tickets</a>
            </div>

            <div className=' row p-5 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-5' style ={{lineHeight:"1.5"}}>Search for an answer on browser help topics to create a tickets</h1>
                    <input placeholder='Eg. how do i activate F&O'/>
                    <br/>
                    <div  className='mt-3'>
                    <a href ="#" style={{marginTop:"10px"}}>Track account Opening</a>
                    <a href ="#">Track segment activation</a>
                    <a href ="#">Intraday margins</a>
                    <a href ="">Kite user manual</a>
                    </div>
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Features</h1>
                    <ol>
                        <li><a href ="#"  style ={{lineHeight:"3"}}>Current Take overs nad Delisting - June 2026</a></li>
                        <li><a href ="#">Latest Intraday leverages- MIS & CO</a></li>
                    </ol>
                </div>
                
            </div>
        </section>
     );
}

export default Hero;