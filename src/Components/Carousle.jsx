import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" style={{marginTop: "10px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/fashion-banner-template_23-2148509060.jpg?w=2000"
          alt="First slide"
          height={"450"}
          style={{objectFit: "cover"}}
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/spring-fashion-sale-banner-design-template_2239-1180.jpg?w=2000"
          alt="Second slide"
          height={"450"}
          style={{objectFit: "cover"}}
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/494/596/16/1-frederique-constant-banner-wallpaper-preview.jpg"
          alt="Third slide"
          height={"450"}
          style={{objectFit: "cover"}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;