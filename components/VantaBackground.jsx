'use client';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three'; // Import three.js

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const savedTheme = useSelector((state) => state.theme.value);

  useEffect(() => {
    let vantaEffect = null;

    const initializeVanta = async () => {
      try {
        const VantaEffect = (await import('vanta/dist/vanta.net.min')).default;
        vantaEffect = VantaEffect({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: savedTheme == 0 ? 0x3fa6ff : 0x1a1a2e, // Adjust line color
          backgroundColor: savedTheme == 0 ? 0x1a1a2e : 'white', // Adjust background color
          points: 10.0, // Number of points in the network
          maxDistance: 20.0, // Maximum distance between points
          spacing: 15.0, // Spacing between points
          THREE, // Pass the imported three.js instance
        });
      } catch (err) {
        console.error('Error initializing Vanta.js', err);
      }
    };

    initializeVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [savedTheme]);


  return <div ref={vantaRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
};

export default VantaBackground;
