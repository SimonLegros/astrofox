import {
  WebGLRenderTarget,
  WebGLMultisampleRenderTarget,
  BufferGeometry,
  BufferAttribute,
} from 'three';

let geometry = null;

export function getFullscreenGeometry() {
  if (!geometry) {
    const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);

    geometry = new BufferGeometry();

    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new BufferAttribute(uvs, 2));
  }

  return geometry;
}

export function createRenderTarget(renderer, options = {}) {
  const { multisample } = options;
  const context = renderer.getContext();
  const pixelRatio = renderer.getPixelRatio();
  const width = Math.floor(context.canvas.width / pixelRatio) || 1;
  const height = Math.floor(context.canvas.height / pixelRatio) || 1;

  return multisample
    ? new WebGLMultisampleRenderTarget(width, height, options)
    : new WebGLRenderTarget(width, height, options);
}
