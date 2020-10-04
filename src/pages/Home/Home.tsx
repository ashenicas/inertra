import React, { Component } from 'react'
import './Home.scss'
import Latest from '../../shared/Latest/Latest'

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';

const containerStyle = {
    width: '900px',
    height: '500px'
};

const center = {
    lat: 6.819183508842937,
    lng: 79.89773232155959
};



export default class Home extends Component {

    render() {
        return (
            <div className='container'>
                <div className='title'>
                    Welcome To The International Earth Data Resources Archive!
                </div>
                <div className='sub-container'>
                    <div className='map'>
                        <LoadScript
                            googleMapsApiKey="AIzaSyCFeEI_l1G_YZsk4Ng_oDEg2Ylk-pSGBe4"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={2}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                            </GoogleMap>
                        </LoadScript>
                    </div>

                    <div className='search-container'>
                        <div className='subtitle'>
                            Enter Your Search Parameters
                        </div>
                        <div className='location-search'>
                            <Paper component="form" className="root">
                                <InputBase
                                    className="input"
                                    placeholder="Search Location..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" className="iconButton" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                        <div className='location-search'>
                            <Paper component="form" className="root">
                                <InputBase
                                    className="input"
                                    placeholder="Search Data Type..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" className="iconButton" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                        <div className='location-search'>
                            <Paper component="form" className="root">
                                <InputBase
                                    className="input"
                                    placeholder="Select Start Date..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" className="iconButton" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                        <div className='location-search'>
                            <Paper component="form" className="root">
                                <InputBase
                                    className="input"
                                    placeholder="Select End Date..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" className="iconButton" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                        <div className='action'>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='latest'>
                    <Latest />
                </div>
            </div>
        )
    }
}
