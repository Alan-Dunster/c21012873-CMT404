// Description: This file contains the shaded room component.

// import local modules
import useLevels from "./useLevels"

export default function ShadedRoom() // ShadedRoom component definition
// This component is used to create a shaded room in the scene.
{ // ShadedRoom component return statement

    // useLevels hook returns the current floor level of the scene and is used to determine when to render the shaded room.
    const currentFloorLevel = useLevels((state) => state.floorLevel) // currentFloorLevel variable definition and assignment statement (useLevels hook)

    return <> {/* ShadedRoom component return statement */}

        {currentFloorLevel === -11.3 && ( // If the current floor level is -11.3, then render the shaded room.

            <mesh // ShadedRoom mesh definition and assignment statement
                position={ [-29.28, -8.1, 1.1] } // ShadedRoom mesh position property definition and assignment statement
                rotation={ [-1.57, 0, 0] } // ShadedRoom mesh rotation property definition and assignment statement (x-axis rotation)
            >{/* ShadedRoom mesh return statement */}

                <planeGeometry args={ [11.5, 13.3] }/>{/* ShadedRoom mesh planeGeometry definition and assignment statement */}

                <meshBasicMaterial // ShadedRoom mesh meshBasicMaterial definition and assignment statement (transparent blue material)
                    color={"blue"} // ShadedRoom mesh meshBasicMaterial color property definition and assignment statement (blue)
                    transparent // ShadedRoom mesh meshBasicMaterial transparent property definition and assignment statement (true) (allows for opacity)
                    opacity={0.6} // ShadedRoom mesh meshBasicMaterial opacity property definition and assignment statement (0.2) (20% opacity)
                />{/* ShadedRoom mesh meshBasicMaterial return statement */}

            </mesh> // ShadedRoom mesh return statement

        )}{/* ShadedRoom component return statement */}
    
    </> // ShadedRoom component return statement

} // ShadedRoom component definition

// EOF