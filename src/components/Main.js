import React from 'react'

export default function Main(props) {
    return (
        <main>
            <div>
                <img src={`images/move/${props.img}`} id="main_img" alt='notfound'/>
            </div>
            <div>
                <div id="section_head">
                    <img id="location_img" src="./images/map-marker-solid.svg" alt='notfound' />
                    <h4 className='location'>{props.location}</h4>
                    <a href={props.googleMapUrl}>View on Google maps</a>
                </div>
                <h1 className='tittle similar'>{props.title}</h1>
                <h5 className='date similar'>{props.startDate} - {props.endDate}</h5>
                <p className='description similar'>{props.description}</p>
                
            </div>
        </main>
          
    )
}
/* <div>
    <img src="" alt="image not found" />
</div>
<div>
<div>
<img src="" alt='image not found' />      
<h4 className='location'></h4> 
<a>View on Google maps</a>
</div>
<h1 className='tittle'>{props.title}</h1>
<h5 className='date'></h5>
<p className='description'></p>
</div>
<hr/> */