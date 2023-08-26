import React from 'react';

const Tooltip = ({ target, formval, style, text }) => {
  if (!target) return null;  // Return early if no target provided

  const targetRect = target.getBoundingClientRect();

  let top, left;

//   switch(position) {
//     case 'top':
//       top = targetRect.top;
//       left = targetRect.left - (targetRect.width+20);
//       console.log(top, left)
//       break;
//     case 'right':
//       top = targetRect.top + (targetRect.height / 2);
//       left = targetRect.right;
//       break;
//     case 'bottom':
//       top = targetRect.bottom;
//       left = targetRect.left + (targetRect.width / 2);
//       break;
//     case 'left':
//       top = targetRect.top + (targetRect.height / 2);
//       left = targetRect.left;
//       break;
//     default:
//       return null;
//   }

//   console.log(targetRect);

  return (
    <div style={{ ...styles.tooltip, ...style, top: `${targetRect.top+targetRect.width/2}px`, left: `${targetRect.left -5}px`, fontSize: Number(formval.textsize), padding: Number(formval.padding), color: formval.textcolor, borderRadius: Number(formval.cornerradius), background: formval.backgroundcolor }}>
      {formval.tooltiptext}
    </div>
  );
}

const styles = {
  tooltip: {
    position: 'absolute',
    zIndex: 10,

    padding: '5px 10px',
    backgroundColor: 'yellow',
    color: 'black',
    // border: '1px solid black',
    // borderRadius: '2px',
    whiteSpace: 'nowrap',
    // transformOrigin: 'center',
    // transform: {
    //   top: 'translate(-50%, -100%)',
    //   right: 'translate(0%, -50%)',
    //   bottom: 'translate(-50%, 0%)',
    //   left: 'translate(-100%, -50%)'
    // }
  }
};

export default Tooltip;
