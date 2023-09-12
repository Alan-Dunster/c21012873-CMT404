// Description: This file contains the PointLights component which is a child component of the App component

// Import dependencies from local files
import useLevels from "./useLevels" // Import the useLevels hook from useLevels.jsx (this hook is used to set the current floor level)

// Define the PointLights component as a default export
export default function PointLights() // Start of PointLights component body

{ // Start of PointLights component body

    // Define the currentFloorLevel variable and set it to the floorLevel state variable from the useLevels hook
    const currentFloorLevel = useLevels((state) => state.floorLevel) // Set the currentFloorLevel variable to the floorLevel state variable from the useLevels hook (this variable is used to set the current floor level)
    
    // Return the PointLights component HTML to the DOM as a child component to the App component
    return <>{/* Add the following components to the DOM as sibling components to each other */}
    
        {currentFloorLevel ===-7  && ( // If the currentFloorLevel variable is equal to -7 then add the following component to the DOM as a sibling component to the App component
        
            <group>{/* Add the following component to the DOM as a child component to the group component */}
            
                <mesh>{/* Add the following component to the DOM as a child component to the mesh component (set the position of the mesh component to [1.5, -5.5, 11.5]) */}
                    
                    <pointLight // Add the following component to the DOM as a child component to the mesh component
                    
                        position={ [13.2, -5.5, 11.5] } // Set the position of the pointLight component to [13.2, -5.5, 11.5]
                        color={"blue"} // Set the color of the pointLight component to blue
                        intensity={50} // Set the intensity of the pointLight component to 50
                        distance={3} // Set the distance of the pointLight component to 3
                        decay={0} // Set the decay of the pointLight component to 0
                    
                    />{/* End of pointLight component */}

                </mesh>{/* End of mesh component */}

                <mesh>
                    <pointLight
                        position={ [16.2, -5.5, 11.5] }
                        color={"blue"}
                        intensity={30}
                        distance={3}
                        decay={0}
                    />
                </mesh>

                <mesh>
                    <pointLight
                        position={ [19.4, -5.5, 11.5] }
                        color={ "blue" }
                        intensity={10}
                        distance={3}
                        decay={0.5}
                    />
                </mesh>
            
                <mesh>
                    <pointLight
                        position={ [22.4, -5.5, 11.5] }
                        color={"green"}
                        intensity={10}
                        distance={3}
                        decay={0}
                    />
                </mesh>

                <mesh>
                    <pointLight
                        position={ [25.4, -5.5, 11.5] }
                        color={ "green" }
                        intensity={5}
                        distance={3}
                        decay={0.5}
                    />
                </mesh>
            
                <mesh>
                    <pointLight
                        position={ [28.5, -5.5, 11.5] }
                        color={"red"}
                        intensity={5}
                        distance={3}
                        decay={0}
                    />
                </mesh>

                <mesh>
                    <pointLight
                        position={ [31.6, -5.5, 11.5] }
                        color={ "darkred" }
                        intensity={60}
                        distance={3}
                        decay={0.5}
                    />
                </mesh>

                <mesh>
                    <pointLight
                        position={ [34.7, -5.5, 11.5] }
                        color={"red"}
                        intensity={20}
                        distance={3}
                        decay={0}
                    />
                </mesh>
        
            </group> // End of group component

        )}{/* End of if statement */}

    </> // End of sibling components

} // End of PointLights component body

// End of file: src/pointLights.jsx