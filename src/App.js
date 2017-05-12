import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import {Layout, Sidebar, Main, Content, Topbar, PrimaryContent, SecondaryContent} from './shared/layout'
import {Container} from './shared/grid'
import Donut from './shared/charts/Donut'
import ToggleSwitch from './shared/switch/ToggleSwitch'

import SideMenu from './components/menu/SideMenu'
import MenuHeader from './components/menu/MenuHeader'
import MenuFooter from './components/menu/MenuFooter'
import LinkItem from './components/menu/LinkItem'
import Brand from './components/menu/Brand'
import Logo from './components/logo/Logo'

import Home from './components/home/Home'
import Top from './components/top/Top'
import Customers from './components/customers/Customers'
import './App.css';
import IconHome from './images/icons/IconHome3';
import IconProfile from './images/icons/IconProfile2';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
              <Sidebar>
                <SideMenu>
                  <Brand>
                    <Logo color='#fff'/>
                    <ToggleSwitch/>
                  </Brand>

                  <MenuHeader>
                    catalogo
                  </MenuHeader>

                  <LinkItem to='/' exact icon={<IconHome stroke='#fff' fill='none'/>}>
                    Home
                  </LinkItem>
                  <LinkItem to='/customers' icon={<IconProfile stroke='#fff' fill='none'/>}>
                    Clientes
                  </LinkItem>
                  <LinkItem to='/subscriptions' icon={<IconProfile stroke='#fff' fill='none'/>}>
                    Suscripciones
                  </LinkItem>
                  <LinkItem to='/layaways' icon={<IconProfile stroke='#fff' fill='none'/>}>
                    Parcialidades
                  </LinkItem>
                  <LinkItem to='/payments' icon={<IconProfile stroke='#fff' fill='none'/>}>
                    Pagos
                  </LinkItem>



                  <MenuHeader>
                    administracion
                  </MenuHeader>

                  <LinkItem to='/users' exact icon={<IconHome stroke='#fff' fill='none'/>}>
                    Usuarios
                  </LinkItem>
                  <LinkItem to='/bussines' icon={<IconProfile stroke='#fff' fill='none'/>}>
                    Datos de Negocio
                  </LinkItem>

                </SideMenu>
                <MenuFooter>
                  <Donut value={50} />
                </MenuFooter>


              </Sidebar>
              <Main>
                <Topbar>
                  <Top/>
                </Topbar>
                <Content>
                  <PrimaryContent>
                    <Switch>
                      <Container fluid>
                        <Route path="/customers" component={Customers}/>
                        <Route exact path="/" component={Home}/>
                      </Container>
                    </Switch>

                  </PrimaryContent>
                  <SecondaryContent visible={true}>

                  </SecondaryContent>
                </Content>
              </Main>
            </Layout>
          </Router>
      </Provider>
    )
  }
}

export default App;
