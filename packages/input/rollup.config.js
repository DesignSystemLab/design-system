import rollupConfig from '../../rollup.config';

export default Object.assign(rollupConfig, {
    output: [
        {
            dir: 'test/cjs', //CommonJS path
            format: 'cjs',
            sourcemap: true
        },
        {
            dir: 'test/esm', //ESmodule path
            format: 'esm',
            sourcemap: true
        }
    ]
});
