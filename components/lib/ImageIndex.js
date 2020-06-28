/**
 * Small links to projects
 * @param {*} props 
 */


export default function ImageIndex(props) {

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
      <li key={`key-${keyCount++}`} className="image-index-item">
        <img srcSet={src.srcSet} src={src.src} />
      </li>
    );
  });

  return (
    <section className="section-one">
      <ul className="image-index">
        {imageItems}
      </ul>
    </section>
  );
}
