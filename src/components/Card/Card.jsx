import './Card.css'


const Card = ({ dataCard }) => {

    return (
        <>

            <a href={dataCard.link} target='_blank'>
                <div className='cards cards__design'>

                    <div className='projects'>
                        <img className='project' src={dataCard.img} />
                    </div>
                    <div className="line">
                        <img src={dataCard.line} alt="" />
                    </div>

                    <div className="cards__info">
                        <h2 className='project__title'>{dataCard.title}</h2>
                        <p className='project__decp'>{dataCard.about}</p>
                    </div>
                </div>
            </a>

        </>
    )
}

export default Card