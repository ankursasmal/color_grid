import React, { useState } from 'react';

function App() {
   const [colors, setColors] = useState(Array(9).fill('transparent'));

  const handleClickColorChange = (index) => {
           if (index === 8) {
               setColors(Array(9).fill('orange'));
    } 
         else {
       const newColors = [...colors];
      newColors[index] = 'green';
           setColors(newColors);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{width: '18.5vw',height: '18.5vw', display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}>
        {colors.map((color, index) => (
            <div  key={index}  onClick={() => handleClickColorChange(index)}
            style={{width: '6vw', height: '6vw', border: '1px solid black',    backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
