import '../styles/RestaurantName.css'
const RestaurantName = ({name, id}) => {
    return (
        <div>
            <ul key={id}>
                <ul>{name}</ul>
            </ul>
        </div>
    );
};
export default RestaurantName;