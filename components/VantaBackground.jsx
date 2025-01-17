'use client';
import React, { useEffect, useRef, useState } from 'react';
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
          gyroControls: true,
          minHeight: 300.0,
          minWidth: 200.0,
          color: savedTheme == 0 ? 0x3fa6ff : 0x1a1a2e, // Adjust line color
          // color: savedTheme == 0 ? 0xffffff : 0x1a1a2e, // Adjust line color
          backgroundColor: savedTheme == 0 ? 0x1a1a2e : 'white', // Adjust background color
          THREE, // Pass the imported three.js instance
          scale: 1.0,
          scaleMobile: 1.0,
          maxDistance: 20.0,
          points: (window.innerWidth > 1200) ? 7 : (window.innerWidth > 768) ? 6.75 : (window.innerWidth > 400) ? 6.5 : 6.5,
          spacing: (window.innerWidth > 1200) ? 15 : (window.innerWidth > 768) ? 18.75 : (window.innerWidth > 400) ? 19.5 : 21.5, // Spacing between points
          // scale: 1.0,
          // scaleMobile: 2.0,
          // points: 6.0, // Number of points in the network
          // maxDistance: 20.0, // Maximum distance between points
          // spacing: 12.0, // Spacing between points
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

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: "-9" }} />
  );
};

export default VantaBackground;
