// Description: Polution component for the scene, which is a child component of the App component and a parent component of the Cloud component (from the @react-three/drei dependency)

// Import dependencies from node_modules
import { Cloud } from '@react-three/drei'

// Import dependencies from local files
import useLevels from './useLevels.jsx'

// Define the Polution component as a default export
export default function Polution()

{ // Start of Polution component body
    
    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel = useLevels((state) => state.floorLevel) // Define the currentFloorLevel variable as the floorLevel state variable from the useLevels hook
    
    // Return the Polution component HTML to the DOM as a child component to the App component
    return <>{/* Add the following components to the DOM as sibling components to each other */}

        {currentFloorLevel ===-16  && ( // If the currentFloorLevel variable is equal to -16 then add the following component to the DOM as a sibling component to the App component
            
            <mesh>{/* Add the following component to the DOM as a child component to the mesh component (set the position of the mesh component to [0, -14, 1] and the scale of the mesh component to [1.3, 0.5, 1.5]) */}
                
                <Cloud // Add the Cloud component to the DOM as a child component to the mesh component
                    
                    position={ [0, -14, 1] } // Set the position of the Cloud component to [0, -14, 1]
                    scale={ [1.3, 0.5, 1.5] } // Set the scale of the Cloud component to [1.3, 0.5, 1.5]
                    depth={ 0.5 } // Set the depth of the Cloud component to 0.5
                    width={ 0.5 } // Set the width of the Cloud component to 0.5
                    color='#ffff88' // Set the color of the Cloud component to #ffff88
                    opacity={ 0.3 } // Set the opacity of the Cloud component to 0.3
                    speed={1} // Set the speed of the Cloud component to 1
                
                />{/* End of Cloud component */}
            
            </mesh> // End of mesh component
        
        )}{/* End of if statement */}
    
    </> // End of sibling components

} // End of Polution component body

// End of file: src/polution.jsx

<mesh>         
    <Cloud
        position={ [0, -14, 1] } 
        scale={ [1.3, 0.5, 1.5] } 
        depth={ 0.5 } 
        width={ 0.5 } 
        color='#ffff88' 
        opacity={ 0.3 } 
        speed={1} 
    />
</mesh>