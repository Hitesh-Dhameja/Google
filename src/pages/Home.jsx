import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core"
import Search from '../components/Search.jsx'

function Home() {
    return (
        <div>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/Google/about">About</Link>
                    <Link to="/Google/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/Google/gmail">Gmail</Link>
                    <Link to="/Google/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="logo"
                />
                <div className="home__inputContainer">
                    <Search />
                    {/* <Search /> */}
                </div>
            </div>

        </div>
    )
}

export default Home
