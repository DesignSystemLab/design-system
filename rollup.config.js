import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs', //CommonJS path
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: 'dist/esm', //ESmodule path
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: 'runtime' }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
};
