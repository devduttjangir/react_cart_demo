import React from 'react';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
function Address() {

    const [isUploading, setisUploading] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [list, setList] = React.useState([]);

    const uploadData = () => {
        setisUploading(true);
        setTimeout(() => {
            setisUploading(false);
        }, 3000);
    }

    const increment = () => {
        let newCount = count + 1;
        setCount(newCount);
        list.push("new item "+newCount);
        console.log(list);
        setList(list)
    }

    const decrement = () => {
        let newCount = count - 1;
        setCount(newCount);
        list.pop();
        setList(list)
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Button onClick={uploadData} disabled={isUploading}>
                        Upload Data
                    </Button>
                </Col>
                <Col>
                    <Button onClick={increment}>
                        Increment +
                    </Button>
                    <Button className="mx-4" onClick={decrement}>
                        Decrement -
                    </Button>
                    <p>
                        Total {count}
                    </p>
                </Col>
            </Row>
            <Row className="p-4">
                <Col>
                <ListGroup>
                    {
                        list.map(item=><ListGroup.Item>{item}</ListGroup.Item>)
                    }
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Address;