import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
// import { inSphere } from 'maath/random/dist/maath-random.esm';
// const { inSphere } = await import('maath/random/dist/maath-random.esm');

import { Suspense, useEffect, useRef, useState } from 'react';

const Stars = (props) => {
  const ref = useRef();

  const [inSphere, setInSphere] = useState(null);
  if (!inSphere) {
    return (<></>)
  }
  const sphere = inSphere ? inSphere(new Float32Array(6000), { radius: 1.2 }) : null;


  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    const loadInSphere = async () => {
      const { inSphere } = await import('maath/random/dist/maath-random.esm');
      setInSphere(() => inSphere);  // Update state with the function
    };

    loadInSphere();
  }, [])


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Startscanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default Startscanvas;