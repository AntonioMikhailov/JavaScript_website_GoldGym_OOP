import webpack from "webpack-stream"; 
import babel from "gulp-babel"; 
export const js = () =>{
  return app.gulp.src(app.path.src.js, {sourcemaps: true}) 
    .pipe(webpack({
      mode: app.isBuild ? 'production': 'development', 
      output: {
        filename: 'script.js', 
      },
    }))
    .pipe(babel({
      presets: [['@babel/env', 
    ]]
  }))
  .pipe(app.gulp.dest(app.path.build.js)); 
 };
