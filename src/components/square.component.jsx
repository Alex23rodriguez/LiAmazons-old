import "./square.styles.css";

import Queen from "./queen.component.jsx";
import Arrow from "./arrow.component.jsx";

const Square = (props) => (
  <div className={`square color${props.color}`} onClick={props.handleClick}>
    {props.queen ? (
      <Queen team={`team${props.queen}`} />
    ) : props.arrow ? (
      <Arrow />
    ) : props.canMove ? (
      <div className='inner-square' />
    ) : null}
  </div>
);

export default Square;
