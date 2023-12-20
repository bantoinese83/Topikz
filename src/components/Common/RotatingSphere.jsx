import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { TextureLoader } from 'three';

const RotatingSphere = ({ textureUrl }) => {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, textureUrl);
    const [spring, api] = useSpring(() => ({
        scale: [1, 1, 1],
        config: { mass: 2, tension: 150, friction: 50 }
    }));

    useFrame(() => {
        meshRef.current.rotation.y += 0.005;
    });

    const handlePointerDown = () => api.start({ scale: [1.5, 1.5, 1.5] });
    const handlePointerUp = () => api.start({ scale: [1, 1, 1] });

    return (
        <a.mesh
            ref={meshRef}
            scale={spring.scale}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}>
            <sphereGeometry args={[3, 64, 64]} />
            <meshStandardMaterial map={texture} />
        </a.mesh>
    );
};

export default RotatingSphere;
