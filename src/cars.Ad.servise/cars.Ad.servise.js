const saveCar = (car) => {
    fetch('http://195.72.144.67/api/v1/cars',{
        method: 'Post',
        body: JSON.stringify(car),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        } )
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {saveCar};