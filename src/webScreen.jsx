// Description: This file contains the WebScreen component which is a child component of the App component

// Import dependencies from node_modules
import { Html } from '@react-three/drei'

// Import dependencies from local files
import useLevels from './useLevels.jsx'
import './webScreen.css'

// Define the WebScreen component as a default export
export default function WebScreen() // Start of WebScreen component body

{ // Start of WebScreen component body
    
    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel = useLevels((state) => state.floorLevel) // Define the currentFloorLevel variable as the floorLevel state variable from the useLevels hook
    
    // Return the WebScreen component HTML to the DOM as a child component to the App component
    return <>{/* Add the following components to the DOM as sibling components to each other */}

        {currentFloorLevel ===16  && ( // If the currentFloorLevel variable is equal to -11.3 then add the following component to the DOM as a sibling component to the App component
            
            <mesh>{/* Add the following component to the DOM as a child component to the mesh component (set the position of the mesh component to [40, -9.6, 3] and the rotation of the mesh component to [0, 1.56, 0]) */}
                
                <meshBasicMaterial>{/* Add the following component to the DOM as a child component to the meshBasicMaterial component */}
                    
                    <Html // Add the Html component to the DOM as a child component to the meshBasicMaterial component
                        
                        transform // Set the transform of the Html component to true
                        occlude={true} // Set the occlude of the Html component to true
                        position={ [-25, 10.8, 3] } // Set the position of the Html component to [40, -9.6, 3]
                        rotation={ [-1.57, 0, 0] } // Set the rotation of the Html component to [0, 1.56, 0]
                        wrapperClass='htmlScreen'
                    
                    >{/* Add the following HTML to the DOM as a child component to the Html component */}
                    
                        {/* <iframe src="https://www.yourweather.co.uk/wimages/fotoc607edd96248f1639a31da509ef894d8.png" />{/*Add the following HTML to the DOM as a child component to the iframe component (set the src of the iframe component to https://www.yourweather.co.uk/wimages/fotoc607edd96248f1639a31da509ef894d8.png) */}
                        <iframe src="https://www.tomorrow.io/weather/GB/WLS/Cardiff/048854/hourly/" />

                    </Html>{/* End of Html component */}
                
                </meshBasicMaterial>{/* End of meshBasicMaterial component */}
            
            </mesh> // End of mesh component
        
        )}{/* End of if statement */}
    
    </> // End of sibling components

} // End of WebScreen component body

// End of file: src/WebScreen.jsx
