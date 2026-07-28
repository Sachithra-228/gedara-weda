"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import { Suspense } from "react";

function HouseModel() {
  return (
    <group position={[0, -0.45, 0]} rotation={[0, -0.35, 0]}>
      <RoundedBox args={[4.2, 0.18, 3.4]} position={[0, -0.1, 0]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#6B7280" roughness={0.58} />
      </RoundedBox>

      <RoundedBox args={[3.2, 1.8, 2.45]} position={[0, 0.85, 0]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#F8F1D7" roughness={0.62} />
      </RoundedBox>

      <mesh position={[0, 2.1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.55, 1.1, 4]} />
        <meshStandardMaterial color="#CE2626" roughness={0.48} metalness={0.03} />
      </mesh>

      <RoundedBox args={[0.72, 1.05, 0.08]} position={[0, 0.43, 1.25]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#111111" roughness={0.45} />
      </RoundedBox>

      <RoundedBox args={[0.52, 0.55, 0.09]} position={[-1.05, 0.95, 1.26]} radius={0.035} smoothness={4}>
        <meshStandardMaterial color="#7DAACB" roughness={0.22} metalness={0.1} />
      </RoundedBox>
      <RoundedBox args={[0.52, 0.55, 0.09]} position={[1.05, 0.95, 1.26]} radius={0.035} smoothness={4}>
        <meshStandardMaterial color="#7DAACB" roughness={0.22} metalness={0.1} />
      </RoundedBox>

      <RoundedBox args={[0.08, 0.7, 0.1]} position={[-1.05, 0.95, 1.32]} radius={0.01} smoothness={2}>
        <meshStandardMaterial color="#8B5A2B" />
      </RoundedBox>
      <RoundedBox args={[0.08, 0.7, 0.1]} position={[1.05, 0.95, 1.32]} radius={0.01} smoothness={2}>
        <meshStandardMaterial color="#8B5A2B" />
      </RoundedBox>
      <RoundedBox args={[2.9, 0.12, 0.12]} position={[0, 1.78, 1.28]} radius={0.02} smoothness={2}>
        <meshStandardMaterial color="#E8DBB3" />
      </RoundedBox>

      <RoundedBox args={[0.55, 1.15, 0.55]} position={[1.18, 2.15, -0.55]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#E8DBB3" roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.68, 0.18, 0.68]} position={[1.18, 2.83, -0.55]} radius={0.03} smoothness={4}>
        <meshStandardMaterial color="#111111" roughness={0.42} />
      </RoundedBox>

      <RoundedBox args={[0.28, 0.9, 0.28]} position={[-1.8, 0.34, -1.2]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#8B5A2B" />
      </RoundedBox>
      <mesh position={[-1.8, 1.1, -1.2]}>
        <coneGeometry args={[0.72, 1.2, 8]} />
        <meshStandardMaterial color="#4F8F5A" roughness={0.75} />
      </mesh>

      {[-1.25, -0.42, 0.42, 1.25].map((x) => (
        <group key={x} position={[x, 0.12, 1.72]}>
          <RoundedBox args={[0.12, 0.46, 0.12]} position={[0, 0.18, 0]} radius={0.02} smoothness={2}>
            <meshStandardMaterial color="#111111" />
          </RoundedBox>
          <RoundedBox args={[0.55, 0.08, 0.12]} position={[0, 0.43, 0]} radius={0.02} smoothness={2}>
            <meshStandardMaterial color="#111111" />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
}

export function HouseScene() {
  return (
    <div className="relative h-[390px] overflow-visible md:h-[520px]">
      <Canvas
        camera={{ position: [4.8, 3.6, 5.8], fov: 38 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.85} />
          <directionalLight castShadow intensity={2.2} position={[4, 7, 4]} shadow-mapSize={[1024, 1024]} />
          <pointLight color="#E8DBB3" intensity={1.3} position={[-3, 2.5, 2]} />
          <HouseModel />
          <ContactShadows blur={2.7} far={7} opacity={0.28} position={[0, -0.58, 0]} scale={8} />
          <Environment preset="apartment" />
          <OrbitControls
            enableDamping
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.05}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}