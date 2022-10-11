import { Canvas } from '@react-three/fiber';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Scene from '../components/Scene';

const Home: NextPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Home;
