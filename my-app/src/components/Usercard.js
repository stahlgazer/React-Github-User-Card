import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function Usercard(props) {
    return (
        <div  className="usercard">
        <Card body inverse color="primary">
            <CardImg src={props.user.avatar_url} alt="github avatar"></CardImg>
            <CardBody>
            <CardTitle>Name: {props.user.name}</CardTitle>
            <CardSubtitle>Github: {props.user.login}</CardSubtitle>
            <CardText>followers: {props.user.followers}, following: {props.user.following}</CardText>
            <a href={props.user.html_url}><Button color="info">Github Profile</Button></a>
            </CardBody>
        </Card>
         </div>
    )
}