import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router';
import './SingleCard.css';

const SingleMovie = (props) => {
    const {movie} = props;
    const{original_title, poster_path , original_language , id}= movie

    // const history = (useHistory)
    // const detailsButton = (id)=>{
    //     const url =`/movie/${id}`
    //     history.push(url)
    // }
    return (
        <Col md={4} lg={3} className=" mt-3 p-3">
        <Card className="single_card"> 
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
        <Card.Body>
          <Card.Title>Title : {original_title}</Card.Title>
          <Card.Text> language : {original_language}</Card.Text>
          {/* <Button onClick={()=> detailsButton(id)} variant="primary">More Details</Button> */}
          <Button as={Link} to={`./movie/${id}`}  variant="primary">More Details</Button> 
        </Card.Body>
      </Card>
      </Col>
    );
};

export default SingleMovie;