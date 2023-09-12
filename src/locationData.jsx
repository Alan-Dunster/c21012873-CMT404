// Description: IoT data for the Seminar Room component.

// import dependencies
import { Html } from '@react-three/drei'

// import local modules
import useLevels from './useLevels.jsx'
import './locationData.css'

// LocationData component definition
export default function LocationData() // LocationData component definition and assignment statement (function)

{ // LocationData component return statement
    const currentFloorLevel = useLevels((state) => state.floorLevel) // currentFloorLevel variable definition and assignment statement (useLevels hook)

    return <> {/* LocationData component return statement */}

        {currentFloorLevel === -2.4 && ( // If the current floor level is -2.4, then render the location data.

            <mesh>{/* LocationData mesh definition and assignment statement */}
                
                <Html // LocationData mesh Html definition and assignment statement
                
                    transform // LocationData mesh Html transform property definition and assignment statement (true) (allows for positioning)
                    position={ [-12, -2.7, 1.2] } // LocationData mesh Html position property definition and assignment statement (x, y, z)
                    rotation={ [-1.57, 0, 0] } // LocationData mesh Html rotation property definition and assignment statement (x-axis rotation)
                
                >{/* LocationData mesh Html return statement */}
                
                    <div className="location-point">{/* LocationData mesh Html div definition and assignment statement */}
                
                        <div className="text">Occupancy 28 of 45</div>{/* LocationData mesh Html div definition and assignment statement */}
                        <div className="text">Temp 18.C</div>
                        <div className="text">Humidity 60%</div>
                        <div className="text">CO2 400ppm</div>
                        <div className="text">VOC 0.2ppm</div>
                        <div className="text">PM2.5 10ppm</div>
                        <div className="text">PM10 10ppm</div>
                        <div className="text">Noise 40dB</div>
                        <div className="text">Light 500lux</div>
                        <div className="text">Wifi 100%</div>                                        
                
                    </div>{/* LocationData mesh Html div return statement */}
                
                </Html>{/* LocationData mesh Html return statement */}
            
            </mesh> // LocationData mesh return statement
        
        )}{/* LocationData component return statement */} 
    
    </> // LocationData component return statement

} // LocationData component definition

// EOF