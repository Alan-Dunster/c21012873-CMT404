// Description: This file contains the Interface component which is a sibling of the App component

// Import dependencies from local files:
import useLevels from './useLevels.jsx' // Import the useLevels hook from the useLevels.jsx file (useLevels is a custom hook that manages the floorLevel and wallLevel states)
import './Interface.css' // Import the Interface.css file (Interface.css contains the CSS for the Interface component)

// Interface component body:
export default function Interface() // Interface component is a function component that returns a div with a className of "interface" and 7 divs with a className of "level" and an onClick event handler that calls the useLevels hook with the appropriate level function as an argument (the level functions are imported from the useLevels hook)
{ // Start of Interface component body

// Declare variables:
    const levelRoof = useLevels((state) => state.level6) // levelRoof is a variable that calls the useLevels hook with the level6 function as an argument (level6 is imported from the useLevels hook)
    const levelFive = useLevels((state) => state.level5)
    const levelFour = useLevels((state) => state.level4)
    const levelThree = useLevels((state) => state.level3)
    const levelTwo = useLevels((state) => state.level2)
    const levelOne = useLevels((state) => state.level1)
    const levelGround = useLevels((state) => state.level0)
    
// Return statement:
    return ( // Return a div with a className of "interface" and 7 divs with a className of "level" and an onClick event handler that calls the useLevels hook with the appropriate level function as an argument (the level functions are imported from the useLevels hook)
    
        <div className="interface">{/*The interface div contains 7 level divs with an onClick event handler that calls the useLevels hook with the appropriate level function as an argument */}
            <div className="level" onClick={levelRoof}>Level R</div>{/*The level divs have a className of "level" and an onClick event handler that calls the useLevels hook with the appropriate level function as an argument*/}
            <div className="level" onClick={levelFive}>Level 5</div>
            <div className="level" onClick={levelFour}>Level 4</div>
            <div className="level" onClick={levelThree}>Level 3</div>
            <div className="level" onClick={levelTwo}>Level 2</div>
            <div className="level" onClick={levelOne}>Level 1</div>
            <div className="level" onClick={levelGround}>Level G</div>
        </div> // End of interface div
    
    ) // End of return statement

} // End of Interface component body

// End of file: src/Interface.jsx

