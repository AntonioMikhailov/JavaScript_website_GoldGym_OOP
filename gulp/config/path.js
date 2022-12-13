import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); 
const buildFolder = `./dist`; 
const srcFolder = `./src`; 
export const path = {
  build: {
    files: `${buildFolder}`,
    css:  `${buildFolder}/css/`,
    img: `${buildFolder}/img`,
    js: `${buildFolder}/js`,
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    less: `${srcFolder}/css/style.less`, 
    scss: `${srcFolder}/css/style.scss`,
    html: `${srcFolder}/**/*.html`,
    rawimages: `${srcFolder}/rawimages/**/*.*`, 
    srcimg: `${srcFolder}/img`, 
    exportimg: `${srcFolder}/img/**/*.*`, 
    js: `${srcFolder}/js/script.js`,
  },
  watch: {
    files: `./src/**/*.*`,
    js: `${srcFolder}/js/**/*.*`,
    less: `${srcFolder}/css/**/*.less`, 
    scss: `${srcFolder}/css/**/*.scss`,
  }, 
  clean: buildFolder, 
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
