import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';

export default function FollowerCard(props) {
    return (
        <div className="fcards">
            {props.followers.map(follower => (
                <Card inverse color="info" key={follower.id}>
                    <CardImg src={follower.avatar_url} alt="github avatar"></CardImg>
                    <CardBody>
                        <CardTitle>{follower.login}</CardTitle>
                        <a href={follower.html_url} target="_blank" rel="noopener noreferrer"><Button color="secondary">Github Profile</Button></a>
                    </CardBody>
                </Card>
            ))}</div>
    );
}