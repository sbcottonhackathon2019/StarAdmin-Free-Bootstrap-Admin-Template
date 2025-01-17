'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpSass = require('gulp-sass');
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var injectPartials = require('gulp-inject-partials');
var preProcess = require('gulp-preprocess');
var inject = require('gulp-inject');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var merge = require('merge-stream');

gulp.paths = {
    dist: 'dist',
};

var paths = gulp.paths;

exports.buildDist = gulp.series(sass, injectPreprocess, populateDist);

function sass () {
    return gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
};
exports.sass = sass

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss');
});

// Static Server + watching scss/html files
exports.serve = gulp.series(exports.buildDist, function () {

    browserSync.init({
        port: 3000,
        server: "./dist/",
        ghostMode: false,
        notify: false
    });

    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);

});



// Static Server without watching scss files
gulp.task('serve:lite', function () {

    browserSync.init({
        server: "./",
        ghostMode: false,
        notify: false
    });

    gulp.watch('**/*.css').on('change', browserSync.reload);
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);

});


/* inject partials like sidebar and navbar */
gulp.task('injectPartial', function () {
    return gulp.src("./**/*.html", {
            base: "."
        })
        .pipe(injectPartials())
        .pipe(gulp.dest("."));
});

function injectPreprocess() {
    return gulp.src(["./pages/**/*.html", "./index.html"], {
        base: "."
    })
    .pipe(preProcess())
    .pipe(gulp.dest("dist/"));
}
exports.injectPreprocess = injectPreprocess;

function populateDist() {
    return gulp.src(["./fonts/**/*.*", "./images/**/*.*", "./js/**/*.*", "./vendors/**/*.*"], {
        base: "."
    })
    .pipe(gulp.dest("./dist/"));
}
exports.populateDist = populateDist;

/* inject Js and CCS assets into HTML */
function injectAssets () {
    return gulp.src('./**/*.html')
        .pipe(inject(gulp.src([
            './vendors/iconfonts/mdi/css/materialdesignicons.min.css',
            './vendors/css/vendor.bundle.base.css',
            './vendors/css/vendor.bundle.addons.css',
            './vendors/js/vendor.bundle.base.js',
            './vendors/js/vendor.bundle.addons.js'
        ], {
            read: false
        }), {
            name: 'plugins',
            relative: true
        }))
        .pipe(inject(gulp.src([
            './css/*.css',
            './js/off-canvas.js',
            './js/misc.js',
        ], {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('./dist'));
}



/*replace image path and linking after injection*/
gulp.task('replacePathDeep', function () {
    return gulp.src('pages/*/*.html', {
            base: "./"
        })
        .pipe(replace('src="images/', 'src="../../images/'))
        .pipe(replace('href="pages/', 'href="../../pages/'))
        .pipe(replace('href="index.html"', 'href="../../index.html"'))
        .pipe(gulp.dest('.'));
});
gulp.task('replacePath', function () {
    return gulp.src('pages/*.html', {
            base: "./"
        })
        .pipe(replace('src="images/', 'src="../images/'))
        .pipe(replace('"pages/', '"../pages/'))
        .pipe(replace('href="index.html"', 'href="../index.html"'))
        .pipe(gulp.dest('.'));
});


/*sequence for injecting partials and replacing paths*/
//gulp.task('inject', gulp.series('injectPartial', 'replacePathDeep'));
/*replacing system based on inject-partial with one based on gulp-preprocess -- exports.buildDist, above*/


/*sequence for building vendor scripts and styles*/
gulp.task('bundleVendors', function () {
    runSequence('copyRecursiveVendorFiles', 'buildBaseVendorStyles', 'buildBaseVendorScripts', 'buildOptionalVendorScripts');
});

/* Copy whole folder of some specific node modules that are calling other files internally */
gulp.task('copyRecursiveVendorFiles', function () {
    var mdi = gulp.src(['./node_modules/mdi/**/*'])
        .pipe(gulp.dest('./vendors/iconfonts/mdi'));
    var fontawesome = gulp.src(['./node_modules/font-awesome/**/*'])
        .pipe(gulp.dest('./vendors/iconfonts/font-awesome'));
    return merge(
        mdi,
        fontawesome
    );
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task('buildBaseVendorScripts', function () {
    return gulp.src([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/popper.js/dist/umd/popper.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendor.bundle.base.js'))
        .pipe(gulp.dest('./vendors/js'));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task('buildBaseVendorStyles', function () {
    return gulp.src(['./node_modules/perfect-scrollbar/css/perfect-scrollbar.css'])
        .pipe(concat('vendor.bundle.base.css'))
        .pipe(gulp.dest('./vendors/css'));
});

/*Building optional vendor scripts for addons*/
gulp.task('buildOptionalVendorScripts', function () {
    return gulp.src([
            'node_modules/chart.js/dist/Chart.min.js'
        ])
        .pipe(concat('vendor.bundle.addons.js'))
        .pipe(gulp.dest('./vendors/js'));
});

exports.build = exports.buildDist
exports.default = exports.serve;