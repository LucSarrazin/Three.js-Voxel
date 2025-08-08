import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils.js';

export function generateWorld(scene) {

    
    const maxDistance = 10;
    const maxCount = maxDistance * maxDistance * maxDistance;
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial(0x00ff00);
    const mesh = new THREE.InstancedMesh(geometry, material, maxCount);
    mesh.count = 0;

    const matrix = new THREE.Matrix4();
    for (let x = 0; x < maxDistance; x++) {
        for (let y = 0; y < maxDistance; y++) {
            for (let z = 0; z < maxDistance; z++){
                matrix.setPosition(x, y, z);
                mesh.setMatrixAt(mesh.count++, matrix);
            }
        }
    }
    scene.add(mesh);
}