import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/images/album/1.png'
import img2 from '../../assets/images/album/2.png'
import img3 from '../../assets/images/album/3.png'
import img4 from '../../assets/images/album/4.png'
import img5 from '../../assets/images/album/5.png'

const Gallery = () => {
    return (
            <div className="photo-gallery">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Gallery</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias molestias non, qui laboriosam aspernatur officia facilis minima aut ipsum. </p>
                    </div>
                    <div className="row photos">
                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img1} data-lightbox="photos"><img className="img-fluid" src={img1} alt='onepunch'/></a></div>
                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img2} data-lightbox="photos"><img className="img-fluid" src={img2} alt='onepunch'/></a></div>
                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img3} data-lightbox="photos"><img className="img-fluid" src={img3} alt='onepunch'/></a></div>
                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img4} data-lightbox="photos"><img className="img-fluid" src={img4} alt='onepunch'/></a></div>
                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img5} data-lightbox="photos"><img className="img-fluid" src={img5} alt='onepunch'/></a></div>
                    </div>
                </div>
            </div>
    );
}

export default Gallery;