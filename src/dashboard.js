import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import Album from './album';
function Dashboard() {
    const [albums, setAlbums] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        axios.get("http://www.json-generator.com/api/json/get/cgyeGRAZiW?indent=2").then((response) => {
            filterCategories(response.data);
        });
      }, []);

      const filterCategories = (categories) => {
        let list = categories.map(album => album.albumName).filter(function (x, i, a) { 
            return a.indexOf(x) === i; 
        });
        setCategories(list);
        setAlbums(categories);
      }

    const renderAlbums = () => {
        let filteredData = albums;
        if(selectedCategory.length > 0) {
            filteredData = albums.filter(album => album.albumName === selectedCategory);
        }
        return filteredData.map(album => <Col className="py-1"><Album title={album.title} albumName={album.albumName} thumbnailUrl={album.thumbnailUrl} /></Col>);
    }
    const selectCategory = (category) => {
        setSelectedCategory(category);
    }

    const renderCategories = () => {
        return categories.map(category => {
            if (category === selectedCategory) {
                return <div className="p-2 text-danger" onClick={() => selectCategory(category)}>{category}</div>
            }
            return <div className="p-2" onClick={() => selectCategory(category)}>{category}</div>
        });
    }
    
    return(<Container fluid>
        <Row className="bg-warning p-3">
            <Col>
            <div className="d-flex justify-content-center">
                {renderCategories()}
            </div>
            </Col>
            <Col className="col-1">
            <div className="p-2">Cart</div>
            </Col>
        </Row>
        <Row>
            {renderAlbums()}
        </Row>
    </Container>);
}
export default Dashboard;