import { useEffect, useRef } from "react";
import * as THREE from "three";
import { LineSegments, WebGLRenderer } from "three";
import SimplexNoise from "simplex-noise";
import { motion } from "framer-motion";

export default function Blob() {
  const container = useRef(null);
  const simplex = new SimplexNoise();

  let renderer: WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    sphere: LineSegments;

  useEffect(() => {
    if (window && container.current) {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

      renderer = new THREE.WebGLRenderer({
        canvas: container.current,
        antialias: true,
      });

      renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
      renderer.setPixelRatio(window.devicePixelRatio);

      console.log(scene.children);
      const geometry = new THREE.SphereGeometry(1, 66, 16);
      const material = new THREE.LineBasicMaterial({ color: 0xd3d3d3 });

      const wireframe = new THREE.EdgesGeometry(geometry, 5.5);
      sphere = new THREE.LineSegments(wireframe, material);
      scene.add(sphere);
      //   const cube = new THREE.Mesh(geometry, material);
      //   scene.add(cube);
      console.log(scene.children);
      camera.position.z = 2.2;

      renderer.render(scene, camera);

      console.log(sphere.geometry.getAttribute("position").array);

      window.addEventListener("resize", onWindowResize, false);
      requestAnimationFrame(animate);

      // Cleanup on unmount, otherwise stuff will linger in GPU
      return () => {
        renderer.forceContextLoss();
        renderer.dispose();
        sphere.geometry.dispose();
        // sphere.material.dispose();
      };
    }
  }, []);

  function onWindowResize() {
    renderer.setSize(window.innerWidth / 3, window.innerWidth / 3);
  }

  function update() {
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.001;
    sphere.rotation.z += 0.001;

    // change '0.003' for more aggressive animation
    var time = performance.now() * 0.00015;
    //console.log(time)
    const vertices = sphere.geometry.getAttribute("position");
    const p = new THREE.Vector3();

    console.log(vertices);
    //go through vertices here and reposition them

    // change 'k' value for more spikes
    const k = 0.5;

    for (let vertexIndex = 0; vertexIndex < vertices.count; vertexIndex++) {
      p.fromBufferAttribute(vertices, vertexIndex);
      p.normalize().multiplyScalar(
        1 + 0.3 * simplex.noise3D(p.x * k + time, p.y * k, p.z * k)
      );
      vertices.setXYZ(vertexIndex, p.x, p.y, p.z);
    }
    sphere.geometry.attributes.position.needsUpdate = true; // required after the first render
    sphere.geometry.computeBoundingSphere();

    // change 'k' value for more spikes
    // var k = 3;
    // for (var i = 0; i < sphere.geometry.vertices.length; i++) {
    //   var p = sphere.geometry.vertices[i];
    //   p.normalize().multiplyScalar(
    //     1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k)
    //   );
    // }
    // sphere.geometry.computeVertexNormals();
    // sphere.geometry.normalsNeedUpdate = true;
    // sphere.geometry.verticesNeedUpdate = true;
  }

  function animate() {
    update();
    /* render scene and camera */
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute right-0 bottom-0"
    >
      <canvas ref={container} />;
    </motion.div>
  );
}
