import gulp from "gulp";
import del from "del";
import imagemin from "gulp-imagemin";
import concat from "gulp-concat";
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import replace from "gulp-replace";
import htmlmin from "gulp-htmlmin";
import htmlReplace from "gulp-html-replace";
import terser from "gulp-terser";
const { src, series, parallel, dest, watch } = gulp;

function copyHtml() {
  return src("./*.html")
    .pipe(
      htmlReplace({
        "css": "style.min.css",
        "js": "all.js",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));
}

async function clean() {
  return await del("dist/**");
}

async function cssMinimazer() {
  return src("./*.css")
    .pipe(sourcemaps.init())
    .pipe(concat("style.min.css"))
    .pipe(postcss([autoprefixer(), cssnano()], {}))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

async function imageOptimization() {
  return src("./*.png").pipe(imagemin()).pipe(dest("dist"));
}

async function jsMinimazer() {
  return src("./finale.js")
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

const build = series(
  clean,
  parallel(copyHtml, cssMinimazer, imageOptimization, jsMinimazer)
);

export { clean, build };
