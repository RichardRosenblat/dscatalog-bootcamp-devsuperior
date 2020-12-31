import userEvent from "@testing-library/user-event";
import {screen} from '@testing-library/react';

export const categoriesResponse ={
    "content": [{
        "id": 3,
        "name": "Computadores"
    }, {
        "id": 2,
        "name": "Eletrônicos"
    }, {
        "id": 1,
        "name": "Livros"
    }]
}

export const productResponse = {
    "id": 3,
    "name": "Macbook Pro",
    "description": ">:^0",
    "price": 1250.0,
    "imgUrl": "image.jpg",
    "date": "2020-07-14T10:00:00Z",
    "categories": [{
        "id": 3,
        "name": "Computadores"
    },
    {
        "id": 2,
        "name": "Eletrônicos"
    }]
}

export const fillFormData= () => {
    
    const nameInput = screen.getByTestId('name');
    const priceInput = screen.getByTestId('price');
    const imgUrlInput = screen.getByTestId('imgUrl');
    const descriptionInput = screen.getByTestId('description');

    userEvent.type(nameInput, 'Computador');
    userEvent.type(priceInput, '1700');
    userEvent.type(imgUrlInput, 'img.png');
    userEvent.type(descriptionInput, 'Descrição');

}