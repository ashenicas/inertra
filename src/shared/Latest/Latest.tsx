import React, { Component } from 'react'

import './Latest.scss'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default class Latest extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>
                    Latest Events
                </div>
                <Carousel className='Carousel'
                    swipeable
                    draggable
                    showDots
                    responsive={responsive}
                    arrows
                    additionalTransfrom={0}
                    itemClass={"react-carousel-item"}
                    minimumTouchDrag={80}
                    partialVisible
                    infinite
                >
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br/>Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles, 
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica
                                    
                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                    <div className='card'>
                        <Card className="root">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="storm.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h2>
                                        Hurricane Seasons Are Worsening
                                        <br />Due To The Climate Crisis
                                    </h2>
                                        Lizards are a widespread group of squamate reptiles,
                                        <br />with over 6,000 species, ranging
                                        <br />across all continents except Antarctica

                                </CardContent>
                            </CardActionArea>

                        </Card></div>
                </Carousel>
            </div>
        )
    }
}
