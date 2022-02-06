import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Blob() {
  const container = useRef(null);

  useEffect(() => {
    if (window && container.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer({ canvas: container.current });

      renderer.setSize(400, 400);
      renderer.setPixelRatio(window.devicePixelRatio);

      console.log(scene.children);
      const geometry = new THREE.SphereGeometry();
      const material = new THREE.LineBasicMaterial({ color: 0xd3d3d3 });

      const wireframe = new THREE.EdgesGeometry(geometry, -11.1981);
      const lines = new THREE.LineSegments(wireframe, material);
      scene.add(lines);
      //   const cube = new THREE.Mesh(geometry, material);
      //   scene.add(cube);
      console.log(scene.children);
      camera.position.z = 2;

      renderer.render(scene, camera);

      // Cleanup on unmount, otherwise stuff will linger in GPU
      return () => {
        renderer.forceContextLoss();
        renderer.dispose();
        lines.geometry.dispose();
        lines.material.dispose();
      };
    }
  }, []);

  return (
    <div className="absolute right-0 bottom-0">
      <canvas ref={container} />;
    </div>
  );
}
