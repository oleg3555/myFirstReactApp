import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/NavBar/Dialogs/Dialogs";
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";

class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/newsFeed" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
