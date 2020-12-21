import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import Catalog from '..';
import { Router } from 'react-router-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import history from 'core/utils/history';
import { productsResponse } from './fixtures';

const server = setupServer(
    rest.get('http://localhost:8080/products', (req, res, ctx) => {
      return res(ctx.json(productsResponse))
    })
  );
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('should render Catalog', async ()=>{
    
    render(
        <Router history={history}>  
            <Catalog />  
        </Router>
    );

    expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();
    expect(screen.getAllByTitle('Loading...')).toHaveLength(3);
    
    await waitFor(() =>  expect(screen.getByText('Macbook Pro')).toBeInTheDocument());
    expect(screen.getByText('PC Gamer')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryAllByTitle('Loading...')).toHaveLength(0);
   
});