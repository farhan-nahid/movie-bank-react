import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const { id } = useParams();
    
    const [movie, setMovie] = useState({});
    const apiKey='870967436c1517d581daf3b245495790'
 
    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
       .then(res => res.json())
       .then(data => setMovie(data))
    }, [id])

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt=""/>
                </Col>
                <Col md="6">
                    <h3>Title : {movie.title}</h3>
                    <h5>Release Date : {movie.release_date}</h5>
                    <h5>Popularity : {movie.popularity}</h5>
                    <h5>Ratting : {movie.vote_average}</h5>
                    <p>Description : {movie.overview}</p>
                </Col>
            </Row>
        </Container>
    );
};


export default MovieDetails;

