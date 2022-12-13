import gulp from "gulp";
import {
  path
} from "./gulp/config/path.js";
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
};
import{less} from "./gulp/tasks/less.js";
import{html} from "./gulp/tasks/html.js";
import{scss} from "./gulp/tasks/scss.js";import{reset}
from "./gulp/tasks/reset.js";import{webpConverter,exportImages}
from "./gulp/tasks/webpconverter.js";
import{js} from "./gulp/tasks/js.js";
import{otfToTtf,ttfToWoff} from "./gulp/tasks/fonts.js";
import{zip} from "./gulp/tasks/zip.js";

function watcher() {
  gulp.watch(path.src.html, html);
  gulp.watch(app.path.src.rawimages, webpConverter);
  gulp.watch(path.src.exportimg, exportImages);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.less, less);
  gulp.watch(path.watch.scss, scss);
}
let mainTasks = gulp.series(otfToTtf, ttfToWoff, html, less, scss, webpConverter, exportImages, js);
let createZip = gulp.series(zip);
export {
  createZip
};
let dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks, watcher);
export {  dev};
export {build};
gulp.task("default", dev);