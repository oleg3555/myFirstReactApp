import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png'/>
            </header>

            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg'/>
                </div>
                <div>
                    Ava +description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2 and for commit
                        </div>
                        <div>
                            post3 and post 4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
