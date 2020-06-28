
/**
 * Modal Layout
 * @param {*} props 
 */

export default function Modal(props) {
  return (
    <div className="modal fullscreen">
      <div className="modal-content">
        <button>X</button>
        Modal Content
        {props.children}
      </div>
    </div>
  );
}
