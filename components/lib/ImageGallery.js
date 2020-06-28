/**
 * Photo Gallery
 * @param {*} props 
 */


export default function ImageGallery(props) {
  
  let keyCount = 0;

  const images = [
    props.img1,
    props.img2,
    props.img3,
    props.img4,
    props.img5
  ];

  const imageItems = images.map(src => {
    return (
      <li key={`key-${keyCount++}`}className="image-gallery-item">
        <img srcSet={src.srcSet} src={src.src} />
      </li>
    );
  });

  return (
    <div className="image-gallery section-one">
      <ul className="gallery">
        {imageItems}
      </ul>
    </div>
  );
}
