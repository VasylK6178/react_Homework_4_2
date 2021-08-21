export default function Car({item:carItem}) {

    return (
        <div>
            {carItem.id} {carItem.model} {carItem.price} {carItem.year}
        </div>

    );

}