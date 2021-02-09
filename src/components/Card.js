import '../styles/Card.css'
const Card = ({name, id,}) => {
    return (
        <div className="rest-card">
            <ul key={id}>
                <ul className="name">{name}</ul>
            </ul>
        </div>
    );
};
export default Card;