import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Earth from '../public/Earth.jsx'
import { Suspense } from "react"
import './MenuModel.css'
const MenuModel  = () => {
    return (<div className="background-container-model">
        <Canvas className="canvas-container">
            <Suspense fallback={null}>
                <ambientLight/>
                <OrbitControls/>
                <Earth/>
            </Suspense>
        </Canvas>
    </div>)
}

export default MenuModel