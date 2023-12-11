import React from 'react'
import sideArrow from '../../assets/images/side_arrow.svg'
import './EducationCard.css'

function EducationCard({ data }) {

    return (
        <div className="edu-container">

            <div className="edu">
                <h2 className=''>{data.title}</h2>
                <img src={data.img} alt="" className='' />
            </div>

            <div className="sidearrow">
                <img src={sideArrow} alt="" />
            </div>

            <div className="lgu">
                <h3 className='icon'>{data.sub1}</h3>
                <p className=''>{data.dec1}</p>
                <h3 className='icon'>{data.sub2}</h3>
                <p className=''>{data.dec2}</p>
            </div>

        </div>
    )
}

export default EducationCard