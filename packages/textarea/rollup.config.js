import rollupConfig from '../../rollup.config';

export default Object.assign(rollupConfig, {
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
  ]
});
