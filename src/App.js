import React, { useState, useRef } from 'react';
import Tooltip from './Tooltip';

const initialState = {
  tooltiptext: "",
  textsize: "",
  padding: "",
  textcolor: "",
  backgroundcolor: "",
  cornerradius: "",
  tooltipwidth: "",
  arrowwidth: "",
  arrowheight: ""
};
function App() {
  const [position, setPosition] = useState('top');
  const [style, setStyle] = useState({});
  const [text, setText] = useState('Tooltip text');
  const [target, setTarget] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  // const [showTooltip, setShowTooltip] = useState(false);
  const { tooltiptext, textsize, padding, textcolor, backgroundcolor, cornerradius, tooltipwidth, arrowwidth, arrowheight } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tooltiptext && textsize && padding && textcolor && backgroundcolor && cornerradius && tooltipwidth && arrowwidth && arrowheight) {
      // dispatch(addDetails({ formValue, navigate, toast }));
      console.log("Success");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue)
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const buttonRefs = useRef({});

  const handleMouseEnter = (btnName) => {
    setTarget(buttonRefs.current[btnName]);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);

  };

  return (
    <div className="App">
      <div style={{ display:"flex", height: "100vh", fontSize: "20px", paddingBottom: "2px" }}>
        <div style={{ paddingLeft: "200px", paddingRight: "100px", paddingTop: "50px" }}>
          <form onSubmit={handleSubmit} style={{ backgroundColor: "lightgrey", paddingTop: "15px", borderRadius: "5px", paddingLeft: "10px", paddingRight: "10px" }}>
            <div style={{ padding: "10px", margin: "10px" }}>
              <label>Target Element</label><br />
              <select value={selectedOption} onChange={handleOptionSelect} style={{ width: "400px", height: "30px", borderRadius: "5px" }}>
                <option value="">Button</option>
                <option value="1">Button 1</option>
                <option value="2">Button 2</option>
                <option value="3">Button 3</option>
                <option value="4">Button 4</option>
                <option value="5">Button 5</option>
              </select>
            </div>
            <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
              <label style={{ alignItems: "left", margin: "5px" }}>ToolTip Text</label>
              <br />
              <input
                type="tooltiptext"
                value={tooltiptext}
                name="tooltiptext"
                onChange={onInputChange}
                style={{ width: "400px", height: "25px", borderRadius: "3px" }}
                placeholder='Input'
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Text Size</label>
                <br />
                <input
                  type="textsize"
                  value={textsize}
                  name="textsize"
                  onChange={onInputChange}
                  style={{ height: "25px", borderRadius: "3px" }}
                  placeholder='3'
                />
              </div>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Padding</label>
                <br />
                <input
                  type="padding"
                  value={padding}
                  name="padding"
                  onChange={onInputChange}
                  style={{ height: "25px", borderRadius: "3px" }}
                  placeholder='3'
                />
              </div>
            </div>
            <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
              <label style={{ alignItems: "left", margin: "5px" }}>Text Color</label>
              <br />
              <input
                type="textcolor"
                value={textcolor}
                name="textcolor"
                onChange={onInputChange}
                style={{ width: "400px", height: "25px", borderRadius: "3px" }}
                placeholder='Input'
              />
            </div>
            <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
              <label style={{ alignItems: "left", margin: "5px" }}>Background Color</label>
              <br />
              <input
                type="backgroundcolor"
                value={backgroundcolor}
                name="backgroundcolor"
                onChange={onInputChange}
                style={{ width: "400px", height: "25px", borderRadius: "3px" }}
                placeholder='Input'
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Corner Radius</label>
                <br />
                <input
                  type="cornerradius"
                  value={cornerradius}
                  name="cornerradius"
                  onChange={onInputChange}
                  style={{ height: "25px", borderRadius: "3px" }}

                  placeholder='3'
                />
              </div>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Tooltip Width</label>
                <br />
                <input
                  type="tooltipwidth"
                  value={tooltipwidth}
                  name="tooltipwidth"
                  onChange={onInputChange}
                  style={{ height: "25px", borderRadius: "3px" }}
                  placeholder='3'
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Arrow Width</label>
                <br />
                <input
                  type="arrowwidth"
                  value={arrowwidth}
                  name="arrowwidth"
                  onChange={onInputChange}
                  style={{ height: "25px", borderRadius: "3px" }}
                  placeholder='3'
                />
              </div>
              <div style={{ padding: "10px", margin: "10px", borderRadius: "7px" }}>
                <label style={{ alignItems: "left" }}>Arrrow Height</label>
                <br />
                <input
                  type="arrowheight"
                  value={arrowheight}
                  name="arrowheight"
                  onChange={onInputChange}
                  placeholder='3'
                  style={{ height: "25px", borderRadius: "3px" }}
                />
              </div>
            </div>
          </form>
        </div>
        <div style={styles.mobilePreview}>
          <button
            ref={ref => buttonRefs.current['Button1'] = ref}
            onClick={e => console.log(e.clientX, e.clientY)}
            onMouseEnter={() => handleMouseEnter('Button1')}
            onMouseLeave={handleMouseLeave}
            style={{ ...styles.buttonTopLeft, ...styles.buttonStyle }}
          >
            Button1
          </button>
  
          <button
            ref={ref => buttonRefs.current['Button2'] = ref}
            onMouseEnter={() => handleMouseEnter('Button2')}
            onMouseLeave={handleMouseLeave}
            style={{ ...styles.buttonTopRight, ...styles.buttonStyle }}
          >
            Button2
          </button>
  
          <button
            ref={ref => buttonRefs.current['Button3'] = ref}
            onMouseEnter={() => handleMouseEnter('Button3')}
            onMouseLeave={handleMouseLeave}
            style={{ ...styles.buttonCenter, ...styles.buttonStyle }}
          >
            Button3
          </button>
  
          <button
            ref={ref => buttonRefs.current['Button4'] = ref}
            onMouseEnter={() => handleMouseEnter('Button4')}
            onMouseLeave={handleMouseLeave}
            style={{ ...styles.buttonBottomLeft, ...styles.buttonStyle }}
          >
            Button4
          </button>
  
          <button
            ref={ref => buttonRefs.current['Button5'] = ref}
            onMouseEnter={() => handleMouseEnter('Button5')}
            onMouseLeave={handleMouseLeave}
            style={{ ...styles.buttonBottomRight, ...styles.buttonStyle }}
          >
            Button5
          </button>
  
        </div>
      </div>


      {showTooltip && <Tooltip formval={formValue} target={target} position={position} style={style} text={text} />}
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    padding: '0 20px'
  },
  mobilePreview: {
    width: '355px',
    height: '650px',
    border: '10px solid #000',
    position: 'relative',
    marginTop: 50,
    marginLeft: '250px',  // Add a specific margin on the left side to move it a bit to the left
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '35px',
    backgroundColor: '#ccc'
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',  // Set to a bright white
    color: 'black',
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',  // Removed the border
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  buttonTopLeft: {
    position: 'absolute',
    top: '20px',
    left: '20px'
  },
  buttonTopRight: {
    position: 'absolute',
    top: '20px',
    right: '20px'
  },
  buttonCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  buttonBottomLeft: {
    position: 'absolute',
    bottom: '20px',
    left: '20px'
  },
  buttonBottomRight: {
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  }
};

export default App;
