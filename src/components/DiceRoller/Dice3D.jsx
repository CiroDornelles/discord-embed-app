import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Geometria do D10
const createD10Geometry = () => {
  const geometry = new THREE.BufferGeometry();
  
  // Ângulo do pentágono regular
  const angle = (2 * Math.PI) / 5;
  
  // Vértices do D10
  const vertices = [];
  const topY = 1; // Ponto superior
  const bottomY = -1; // Ponto inferior
  const radius = 1;
  const middleY = 0.2; // Altura do anel do meio
  
  // Ponto superior
  vertices.push(0, topY, 0);
  
  // Pontos superiores do pentágono
  for (let i = 0; i < 5; i++) {
    const x = radius * Math.cos(i * angle);
    const z = radius * Math.sin(i * angle);
    vertices.push(x * 0.8, middleY, z * 0.8);
  }
  
  // Pontos inferiores do pentágono
  for (let i = 0; i < 5; i++) {
    const x = radius * Math.cos(i * angle + angle / 2);
    const z = radius * Math.sin(i * angle + angle / 2);
    vertices.push(x * 0.8, -middleY, z * 0.8);
  }
  
  // Ponto inferior
  vertices.push(0, bottomY, 0);
  
  // Faces (triângulos)
  const indices = [];
  
  // Faces superiores
  for (let i = 0; i < 5; i++) {
    indices.push(0, i + 1, ((i + 1) % 5) + 1);
  }
  
  // Faces do meio (parte superior)
  for (let i = 0; i < 5; i++) {
    indices.push(i + 1, i + 6, ((i + 1) % 5) + 1);
  }
  
  // Faces do meio (parte inferior)
  for (let i = 0; i < 5; i++) {
    indices.push(((i + 1) % 5) + 1, i + 6, ((i + 1) % 5) + 6);
  }
  
  // Faces inferiores
  for (let i = 0; i < 5; i++) {
    indices.push(11, ((i + 1) % 5) + 6, i + 6);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  return geometry;
};

// Posições dos números no D10
const numberPositions = {
  1: [0, 0.6, 0.9],
  2: [0.85, 0.1, 0.3],
  3: [0.55, 0.1, -0.7],
  4: [-0.55, 0.1, -0.7],
  5: [-0.85, 0.1, 0.3],
  6: [0.55, -0.1, 0.7],
  7: [0.85, -0.1, -0.3],
  8: [0, -0.1, -0.9],
  9: [-0.85, -0.1, -0.3],
  10: [-0.55, -0.1, 0.7],
};

const numberRotations = {
  1: [0, Math.PI, 0],
  2: [0, Math.PI * 1.2, 0],
  3: [0, Math.PI * 1.4, 0],
  4: [0, Math.PI * 1.6, 0],
  5: [0, Math.PI * 1.8, 0],
  6: [Math.PI, Math.PI * 0.2, 0],
  7: [Math.PI, Math.PI * 0.4, 0],
  8: [Math.PI, Math.PI * 0.6, 0],
  9: [Math.PI, Math.PI * 0.8, 0],
  10: [Math.PI, Math.PI, 0],
};

const Dice3D = ({ value, isRolling, onRollComplete }) => {
  const meshRef = useRef();
  const speedRef = useRef(15);
  const rollTimeRef = useRef(0);
  const isRollingRef = useRef(isRolling);

  useEffect(() => {
    isRollingRef.current = isRolling;
    if (isRolling) {
      speedRef.current = 15;
      rollTimeRef.current = 0;
    }
  }, [isRolling]);

  useFrame((state, delta) => {
    if (!meshRef.current || !isRollingRef.current) return;

    rollTimeRef.current += delta;
    
    if (rollTimeRef.current > 1) {
      speedRef.current *= 0.95;
      
      if (speedRef.current < 0.01) {
        onRollComplete?.();
      }
    } else {
      meshRef.current.rotation.x += delta * speedRef.current * (Math.random() - 0.5);
      meshRef.current.rotation.y += delta * speedRef.current * (Math.random() - 0.5);
      meshRef.current.rotation.z += delta * speedRef.current * (Math.random() - 0.5);
    }
  });

  const textColor = value >= 6 ? '#ffd700' : '#ff0000';
  const diceColor = value >= 6 ? new THREE.Color(0.5, 0, 0) : new THREE.Color(0.3, 0, 0);

  return (
    <group>
      <mesh
        ref={meshRef}
        geometry={createD10Geometry()}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={diceColor}
          metalness={0.7}
          roughness={0.2}
          emissive={diceColor}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Números */}
      {Object.entries(numberPositions).map(([num, pos]) => (
        <Text
          key={num}
          position={pos}
          rotation={numberRotations[num]}
          fontSize={0.3}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          renderOrder={1}
        >
          {num}
        </Text>
      ))}
    </group>
  );
};

export default Dice3D;
