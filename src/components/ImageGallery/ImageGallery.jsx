import { Component } from 'react';
import axios from 'axios';
import styles from './image-gallery.module.css';

class ImageGallery extends Component {
    state = {
        items: [],
        loading: false,
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        axios.get('https://pixabay.com/api/?q=cat&page=1&key=28761700-bdb95022346d012dceda456a5&image_type=photo&orientation=horizontal&per_page=12')
        .then(({data}) => {
            this.setState({
                items: data,
                loading: false,
            })
        })
        
        .catch(error => {console.log(error.message);
    })
    .finally(() => this.setState({loading: false, }))
}

    render() {
        const { items, loading } = this.state;

        const elements = items.map((
            {id,
            webformatURL,
            largeImageURL}) => 
            <li key={id} className={styles.item}>{webformatURL}</li>)

        return(
         <div className='container'>   
        <ul>
            <h2>Nindja</h2>
            {elements}
        </ul>
        { loading && <p>....Loading posts</p> }
        </div>
       )
    }
}


export default ImageGallery;