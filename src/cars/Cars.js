import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../cars.servis/cars.servis";


export default function Cars() {

    let [cars, setCars]= useState ([]);

    useEffect( () => {
        getCars().then(value => setCars([...value]));
    }, []);

    return (
        <div>
            {
                cars.map( (carItem, index) => <Car key={carItem.id} item={carItem}/>)
            }
        </div>


    );

}
