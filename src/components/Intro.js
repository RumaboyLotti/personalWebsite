import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "../styles/Intro.css";


class Intro extends React.Component {

  render() {
    return (
      <div className="Hero">
        <div className="Hero-Text">
        <h1 id="Text">
          <TypeAnimation
          sequence={[
            'Hello',
            2000, // Waits 1s
            'I am Ladi ',
            2000, // Waits 2s
            'Welcome ', 
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ fontSize: '2em', display: 'inline-block' }} />
          </h1>
        </div>
      </div>
    );
  }
}
export default Intro;