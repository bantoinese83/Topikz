import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import RotatingSphere from './RotatingSphere';

const SphereLogo = () => {
    const textureUrl = '/background-image.png'; // Replace with your texture URL

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
            <PerspectiveCamera position={[0, 0, 5]} />
            <OrbitControls />
            <RotatingSphere textureUrl={textureUrl} />
        </Canvas>
    );
};

export default SphereLogo;
