import React, { useEffect, useState } from 'react';

import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import axios from 'axios';

export default function Blog(props) {
    let [articles, setArticle] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/books').then(res => {
            setArticle(state => {
                return [...res.data];
            });
        }).catch(err => {
            console.log(err);
            return;
        });
    }, []);

    return (
        <Container>
            <h1>Bài viết</h1>
            <Row>
                {
                    articles.map(item =>
                        <Col sm="12" md="6" lg="4" className="p-3">
                            <Card>
                                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                    <Button>Thêm</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}