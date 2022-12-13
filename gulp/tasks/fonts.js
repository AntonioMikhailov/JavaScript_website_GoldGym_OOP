import fonter from 'gulp-fonter';
export const otfToTtf = () =>{
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf*`, {}) 
  .pipe(fonter({
    formats: ['ttf']
  }))
  .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`)); 
  };
  export const ttfToWoff = () =>{
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.*`, {}) 
    .pipe(fonter({
      formats: ['woff']
    }))
      .pipe(app.gulp.dest(`${app.path.build.fonts}`));
    };
