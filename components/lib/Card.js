/**
 * Text and Image Card
 * @param {*} props 
 */


export default (props) => {
  return (
    <div className="card-item">
      <img
        className="card-image-content"
        srcSet={props.bgImage.srcSet}
        src={props.bgImage.src}
        alt=""
      />
      <div className="card-text-content">
        <h3>Card Title</h3>
        <h4 className="card-sub-title">
          Tristique quisque natoque 
        </h4>
        <p>
          Elementum erat vel praesent vulputate viverra metus scelerisque
          vivamus, dis arcu cras purus gravida
        </p>
      </div>
    </div>
  );
}
