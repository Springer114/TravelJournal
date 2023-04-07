export default function Card(props) {
    return (
        <section>
            <img className="card-image" src={`../images/${props.photo}`} alt="location"/>
            <div className="card-content">
                <div className="card-country">{props.country}</div>
                <a className="card-geoLoc" href={props.geoLoc}>View on Google Maps</a>
                <h2 className="card-location">{props.location}</h2>
                <div className="card-dateVisited">{props.dateVisited}</div>
                <p className="card-description">{props.description}</p>
            </div>
        </section>
    )
}