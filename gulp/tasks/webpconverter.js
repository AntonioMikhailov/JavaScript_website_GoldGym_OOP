import toWebpConverter from "gulp-webp";
import newerImg from "gulp-newer";
export const webpConverter = () =>{
  return app.gulp.src(app.path.src.rawimages)
 .pipe(newerImg({ 
    dest: app.path.src.srcimg,
    ext: '.webp',
 }))
  .pipe(toWebpConverter()) 
  .pipe(app.gulp.dest(app.path.src.srcimg));
  };
  export const exportImages = () =>{
    return app.gulp.src(app.path.src.exportimg) 
    .pipe(newerImg({ 
      dest: app.path.build.img,
      ext: '.webp',
      }))
    .pipe(app.gulp.dest(app.path.build.img)); 
    };
