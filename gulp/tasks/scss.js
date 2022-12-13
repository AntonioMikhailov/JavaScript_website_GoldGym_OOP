import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import dartSass from "sass"; 
import gulpSass from "gulp-sass"; 
const sass = gulpSass(dartSass); 
export const scss = () =>{
return app.gulp.src(app.path.src.scss, {"allowEmpty": true}, {sourcemaps: app.isDev} ) 
.pipe(
   gulpIf(
   app.isDev, 
    sourcemaps.init(),
  )
)
.pipe(sass({
  output: 'expanded' 
})) 
.pipe(sourcemaps.write())
.pipe(autoprefixer({
 grid: true,
 overrideBrowserlist: ["last 3 version"], 
  cascade: true,
}))
.pipe(app.gulp.dest(app.path.build.css)); 
};
