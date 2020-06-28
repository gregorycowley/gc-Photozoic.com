/**
 *  Image Carousel
 */

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.current = 0;
    this.state = {items: [
      {
        src: props.img1, // src: require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
        active: "active"
      },
      {
        src: props.img2, // src: require(`../../public/images/1920x1080_Art_2.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
        active: ""
      },
      {
        src: props.img3, // src: require(`../../public/images/1920x1080_Art_3.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
        active: ""
      },
      {
        src: props.img4, // src: require(`../../public/images/1920x1080_Art_4.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
        active: ""
      },
      {
        src: props.img5, // src: require(`../../public/images/1920x1080_Art_5.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
        active: ""
      }
    ]};
    this.total = this.state.items.length;
    this.setSlide = this.setSlide.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  setSlide(prev, next) {
    var slide = this.current;
    if (next > this.total - 1) {
      slide = 0;
      this.current = 0;
    }
    if (next < 0) {
      slide = this.total - 1;
      this.current = this.total - 1;
    }

    let tempItems = this.state.items;
    tempItems[prev].active = "";
    tempItems[this.current].active = "active";
    this.setState( {items: tempItems })

    setTimeout(function() {}, 800);

    console.log("current " + this.current);
    console.log("prev " + prev);
  }

  nextImage() {
    let next = this.current;
    this.current = this.current + 1;
    this.setSlide(next, this.current);
  }

  prevImage() {
    let prev = this.current;
    this.current = this.current - 1;
    this.setSlide(prev, this.current);
  }

  render() {
    console.log("render");
    return (
      <div className="image-carousel">
        <div className="carousel__nav">
          <span id="moveLeft" onClick={this.prevImage} className="carousel__arrow">
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
          </span>
          <span id="moveRight" onClick={this.nextImage} className="carousel__arrow">
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </span>
        </div>

        <CarouselItem index="1" activeState={this.state.items[0].active} imgSrc={this.state.items[0].src} />
        <CarouselItem index="2" activeState={this.state.items[1].active} imgSrc={this.state.items[1].src} />
        <CarouselItem index="3" activeState={this.state.items[2].active} imgSrc={this.state.items[2].src} />
        <CarouselItem index="4" activeState={this.state.items[3].active} imgSrc={this.state.items[3].src} />
        <CarouselItem index="5" activeState={this.state.items[4].active} imgSrc={this.state.items[4].src} />
      </div>
    );
  }s
}

/**
 * Image Carousel Item
 */

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={`carousel-item carousel-item--${this.props.index} ${this.props.activeState}`}>
        <CarouselItemImage src={this.props.imgSrc.src}/>
        <div className="carousel-item__info">
          <div className="carousel-item__container">
            <h2 className="carousel-item__subtitle">The grand moment </h2>
            <h1 className="carousel-item__title">Le tour</h1>
            <p className="carousel-item__description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <a href="#" className="carousel-item__btn">
              Explore the tour
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const CarouselItemImage = props => {
  return (
    <div
      className={`carousel-item__image`}
      style={{ backgroundImage: `url('${props.src}')` }}
    />
  )
};

export default ImageCarousel;
