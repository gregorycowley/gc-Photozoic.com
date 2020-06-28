/**
 * Small links to projects
 * @param {*} props 
 */


export default function ImageShowcase(props) {

  const images = [
    props.img1,
    props.img
  ];

  return (
    <section className="image-showcase section-one">
      <div className="row image-showcase-item">
        <img srcSet={images[0].srcSet} src={images[0].src} />
      </div>
      <div className="row image-showcase-item">
        <img srcSet={images[1].srcSet} src={images[1].src} />
        <img srcSet={images[1].srcSet} src={images[1].src} />
      </div>
      <div className="row image-showcase-item">
        <img srcSet={images[0].srcSet} src={images[0].src} />
      </div>
    </section>
  );
}
