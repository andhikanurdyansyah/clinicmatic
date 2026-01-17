'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Car() {
  const carRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (carRef.current) {
      // Gentle rotation animation
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      carRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={carRef} position={[0, -0.5, 0]}>
      {/* Car Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2, 0.8, 4]} />
        <meshStandardMaterial 
          color="#FF6B00" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Car Roof */}
      <mesh position={[0, 1.2, -0.3]} castShadow>
        <boxGeometry args={[1.8, 0.6, 2]} />
        <meshStandardMaterial 
          color="#FF6B00" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 1.2, 0.8]} castShadow>
        <boxGeometry args={[1.7, 0.5, 0.1]} />
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Wheels */}
      {[
        [-0.9, 0, 1.3],
        [0.9, 0, 1.3],
        [-0.9, 0, -1.3],
        [0.9, 0, -1.3],
      ].map((position, i) => (
        <group key={i} position={position as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial color="#1A1A1A" metalness={0.5} roughness={0.5} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.32, 32]} />
            <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      {[[-0.6, 0.5, 2.01], [0.6, 0.5, 2.01]].map((position, i) => (
        <mesh key={`headlight-${i}`} position={position as [number, number, number]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Car />
      
      <Environment preset="city" />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#2A2A2A" 
          metalness={0.3} 
          roughness={0.8}
        />
      </mesh>
    </>
  );
}

export default function CarScene() {
  // Ensure this only renders on client side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
