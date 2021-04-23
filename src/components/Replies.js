import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

function Replies() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className="replies">
      <div className="replybtn">
        <p>reply</p>
      </div>
      <div className="reply">
        <p>21 replies</p>
      </div>
      <div 
        className="reply c" 
        onMouseEnter={() => setFlipped(state => !state)}
        onMouseLeave={() => setFlipped(state => !state)}>
        <a.p className="up arrow" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.p className="down arrow" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        <p>123</p>
      </div>
      <div className="reply c">
        <p className="down arrow" />
        <p>0</p>
      </div>
    </div>
  )
}

export default Replies;
