import PropTypes from 'prop-types';

const Carousel = ({ slides = [], interval = 5000 }) => {
  
  if (!slides.length) return null;

  return (
    <div>
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex} id={slide.id} className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {slide.images.map((image, index) => (
              <li
                key={index}
                data-bs-target={`#${slide.id}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval={interval}
              >
                <img
                  src={image.image}
                  className="d-block w-100"
                  alt={image.title}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{image.title}</h5>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button" data-bs-slide="prev"
            data-bs-target={`#${slide.id}`}
          >
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button" data-bs-slide="next"
            data-bs-target={`#${slide.id}`}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};

export default Carousel;