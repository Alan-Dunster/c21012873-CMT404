// Description: This file contains the Balls component which is a child component of the App component

// Import dependencies from local files
import useLevels from "./useLevels"

// Define the Balls component as a default export
export default function Balls()

{ // Start of Balls component body

    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel = useLevels((state) => state.floorLevel)
    
    // Return the Balls component HTML to the DOM as a child component to the App component
    return ( // Return the following HTML
        
        <>{/* Add the following components to the DOM as sibling components to each other */}

        {currentFloorLevel ===2  && ( // If the currentFloorLevel variable is equal to 2 then add the following component to the DOM as a sibling component to the App component
            
            <group>{/* Add the following component to the DOM as a child component to the group component */}
            
                <mesh
                    position={ [16.2, 4, 12] } // Set the position of the mesh component to the following coordinates (16.2, 4, 12) on the x, y, and z axis respectively
                    scale={0.7} // Set the scale of the mesh component to 0.7 on the x, y, and z axis respectively (scale the mesh component to 70% of its original size)
                >{/* Add the following component to the DOM as a child component to the mesh component */}
                        <sphereGeometry />{/* Add the following component to the DOM as a child component to the mesh component */}
                        <meshBasicMaterial color="blue" />{/* Add the following component to the DOM as a child component to the mesh component (set the color of the meshBasicMaterial component to blue) */}
                </mesh>{/* End of mesh component */}

                <mesh position={ [19.3, 4, 12]} scale={1.4}>
                    <sphereGeometry />
                    <meshBasicMaterial color={"green"} />
                </mesh>

                <mesh position={ [22.4, 4, 12]} scale={1.1}>
                    <sphereGeometry />
                    <meshBasicMaterial color={"yellow"} />
                </mesh>

                <mesh position={ [25.5, 4, 12] } scale={1}>                
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>

                <mesh position={ [28.6, 4, 12]} scale={1.3}>
                    <sphereGeometry />
                    <meshBasicMaterial color={"red"} />
                </mesh>

                <mesh position={ [31.7, 4, 12]}>
                    <sphereGeometry />
                    <meshBasicMaterial color={"brown"} />
                </mesh>

            </group> // End of group component
        
        )}{/* End of if statement */}
        
        </> // End of sibling components
    
    ) // End of return statement

} // End of Balls component body

// End of file: src/balls.jsx