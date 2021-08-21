import {saveCar} from "../cars.Ad.servise/cars.Ad.servise";


export default function Form() {

    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
        // eslint-disable-next-line no-undef
        saveCar (carToSave);

    }

    return (
        <div>
            <h2>Form add cars</h2>
            <form onSubmit={onFormSubmit}>
                <input type="model" name = {'model'} placeholder={'model'} />
                <input type="price" name={'price'} placeholder={'price'}/>
                <input type="year" name={'year'} placeholder={'year'}/>
                <button>save</button>
                <h3>All cars</h3>
            </form>
        </div>

    )

 }