import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export default function Part1(props) {
  const { nodes } = useGLTF('/Part1.gltf')

  return (
    <group {...props} dispose={null}>
      {/* เพิ่มแสงในฉาก */}
      <ambientLight intensity={0.5} /> {/* แสงกระจายทั่วฉาก */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} /> {/* จำลองแสงแดด */}
      <pointLight position={[-2, 2, -2]} intensity={2} color="white" /> {/* แหล่งกำเนิดแสงแบบจุด */}

      {/* โมเดล */}
      <mesh geometry={nodes.node.geometry} position={[-1, 0, -1]} scale={0.0005}>
        <meshStandardMaterial 
          color="#D3D3D3" 
          metalness={0.3} 
          roughness={0.3} 
          flatShading={true} 
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Part1.gltf')
