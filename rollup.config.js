import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import vue from 'rollup-plugin-vue';
import image from "@rollup/plugin-image";
import { terser } from 'rollup-plugin-terser';
// import cssnano from 'cssnano';


export default {
    input: "./src/index.js",
    output: [{
            file: "./dist/index.umd.js",
            format: "umd",
            name: "vueSlide"
        },
        {
            file: "./dist/index.es.js",
            format: "esm"
        },
        {
            file: "./dist/index.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        postcss(),
        vue({
            style: {
                postcssPlugins: [
                    autoprefixer(),
                    // cssnano()

                ]
            }
        }),
        image(),
        terser()


    ],
    external: [ //外部库， 使用'umd'文件时需要先引入这个外部库
        'vue'
    ]
}