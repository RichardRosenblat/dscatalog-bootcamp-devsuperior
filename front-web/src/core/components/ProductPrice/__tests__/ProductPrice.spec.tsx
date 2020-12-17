import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductPrice from '..'

describe('Tests with price greather than zero',() => {
   
   test('should render ProductPrice', () => {
      //Arrange
      const price = 1200;
      //Act
      render(
         <ProductPrice price={price} />
      );
      //Assert
      const currencyElement=screen.getByText('R$');
      const priceElement=screen.getByText('1,200.00');
      
      expect(currencyElement).toBeInTheDocument();
   });   

   test('should render ProductPrice without thousand separator', () => {
      //Arrange
      const price = 100;
      //Act
      render(
         <ProductPrice price={price} />
      );
      //Assert
      const currencyElement=screen.getByText('R$');
      const priceElement=screen.getByText('100.00');
      
      expect(currencyElement).toBeInTheDocument();
   });

});

describe('Tests with price lower or equal than zero',() => {
   test('should render ProductPrice with price equals zero', () => {
      //Arrange
      const price = 0;
      //Act
      render(
         <ProductPrice price={price} />
      );
      //Assert
      const currencyElement=screen.getByText('R$');
      const priceElement=screen.getByText('0.00');
      
      expect(currencyElement).toBeInTheDocument();
   });
})
