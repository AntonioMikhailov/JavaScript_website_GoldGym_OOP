import lessEx from 'gulp-less';
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
export const less = () =>{
  return app.gulp.src(app.path.src.less, {"allowEmpty": true}, {sourcemaps: app.isDev} ) 
  .pipe(
     gulpIf(
     app.isDev, 
      sourcemaps.init(),
    )
  )
  .pipe(lessEx({
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
