import App from './App';
import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'

import Login from './pages/Login/index'
import SignUp from './pages/signUp/index'
import Menu from './pages/Salao/index'
import Kitchen from './pages/Kitchen/index'

jest.mock('./pages/Login/index')
jest.mock('./pages/signUp/index')
jest.mock('./pages/Salao/index')
jest.mock('./pages/Kitchen/index')

describe('testing routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('login page should be render when pathname is `/`', async () => {

    Login.mockImplementation(() => <div>loginPage</div>)
    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("loginPage")).toBeInTheDocument();
    expect(Login).toHaveBeenCalledTimes(1);
  });

  it('login page should be render when pathname is `/login`', async () => {

    Login.mockImplementation(() => <div>loginPage</div>)
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("loginPage")).toBeInTheDocument();
    expect(Login).toHaveBeenCalledTimes(1);
  });


  it('register page should be render when pathname is `/register`', async () => {

    SignUp.mockImplementation(() => <div>registerPage</div>)
    const history = createMemoryHistory();
    history.push('/register');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("registerPage")).toBeInTheDocument();
    expect(SignUp).toHaveBeenCalledTimes(1);
  });

  it('menu page should be render when pathname is `/menu`', async () => {

    Menu.mockImplementation(() => <div>menuPage</div>)
    const history = createMemoryHistory();
    history.push('/menu');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("menuPage")).toBeInTheDocument();
    expect(Menu).toHaveBeenCalledTimes(1);
  });

  it('kitchen page should be render when pathname is `/kitchen`', async () => {

    Kitchen.mockImplementation(() => <div>kitchenPage</div>)
    const history = createMemoryHistory();
    history.push('/kitchen');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText("kitchenPage")).toBeInTheDocument();
    expect(Kitchen).toHaveBeenCalledTimes(1);
  });

})