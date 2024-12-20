import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';
 
export default defineConfig({
    plugins: [ glsl() ],
    base: '/danielsmog.github.io/'
  })


  //https://github.com/danielsmog/danielsmog.github.io