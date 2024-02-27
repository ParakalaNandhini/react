
import Carousel from 'react-bootstrap/Carousel';

function Caroussel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-ZVBMRyhjWYw/VPIux8ai97I/AAAAAAAADVg/1psfw_ktufo/s1600/Rose.jpg"
          alt="First slide"
          height="500"
          width="200"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1919099.jpg"
          alt="Second slide"
          height="500"
          width="200"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i2.wp.com/allpicts.in/wp-content/uploads/2017/08/Macro-Photo-of-Lotus-Flower-for-Wallpaper-in-HD.jpg?w=1920"
          alt="Third slide"
          height="500"
          width="200"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;