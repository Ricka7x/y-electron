import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './shared/layout/Layout'
import Sidebar from './shared/layout/Sidebar'
import Main from './shared/layout/Main'
import Content from './shared/layout/Content'
import Topbar from './shared/layout/Topbar'
import PrimaryContent from './shared/layout/PrimaryContent'
import SecondaryContent from './shared/layout/SecondaryContent'

import Donut from './shared/charts/Donut'
import Logo from './shared/logo/Logo'
import ToggleSwitch from './shared/switch/ToggleSwitch'

import Home from './components/home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
              <Sidebar>
                <Logo color='#fff'/>
                <ToggleSwitch/>
                <Donut value={75} />
              </Sidebar>
              <Main>
                <Topbar>

                </Topbar>
                <Content>
                  <PrimaryContent>
                    <Route exact path="/" component={Home}/>
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
