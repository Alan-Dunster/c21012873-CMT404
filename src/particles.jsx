// Description: This file contains the Particles component for the scene, which is a child component of the App component and a parent component of the Sparkles component (from the @react-three/drei dependency)

// Import dependencies from node_modules
import { Sparkles } from "@react-three/drei"

// Import dependencies from local files
import useLevels from "./useLevels"

// Define the Particles component as a default export
export default function Particles() // Start of Particles component body

// Return the Particles component HTML to the DOM as a child component to the App component
{ // Start of Particles component body

    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel=useLevels((state) => state.floorLevel) // Define the currentFloorLevel variable as the floorLevel state variable from the useLevels hook
    const number = (200) // Define the number variable and set it to 200 (this variable is used to set the number of particles in the scene)

    // Return the Particles component HTML to the DOM as a child component to the App component
    return <>{/* Add the following components to the DOM as sibling components to each other */}
        
        {currentFloorLevel ===7  && ( // If the currentFloorLevel variable is equal to 7 then add the following component to the DOM as a sibling component to the App component
        
            <mesh>{/* Add the following component to the DOM as a child component to the mesh component (set the position of the mesh component to [-15, 8.1, 1] and the scale of the mesh component to [15, 0.5, 10]) */}
                
                <Sparkles // Add the Sparkles component to the DOM as a child component to the mesh component
                
                    position={ [-15, 8.5, 1] } // Set the position of the Sparkles component to [0, 3, 0]
                    size={ 60 } // Set the size of the Sparkles component to 'random' (this will set the size of the Sparkles component to a random size)
                    opacity={1} // Set the opacity of the Sparkles component to 1
                    count={number} // Set the count of the Sparkles component to the number variable (this will set the number of particles in the scene to 200)
                    speed={3} // Set the speed of the Sparkles component to 3
                    noise={1} // Set the noise of the Sparkles component to 1
                    color={"orange"} // Set the color of the Sparkles component to orange
                    scale={ [15, 3, 10] } // Set the scale of the Sparkles component to [15, 3, 10]
                
                />{/* End of Sparkles component */}
            
            </mesh> // End of mesh component
        
        )}{/* End of if statement */}
    
    </> // End of sibling components

} // End of Particles component body

// End of file: src/particles.jsx