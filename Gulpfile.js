import gulp from "gulp";
import gulpConcat from "gulp-concat";
import { rm } from "node:fs/promises";

export async function clean() {
    await rm("dist", {force: true, recursive: true});
}

export const build =
    gulp.series(
        clean,
        function concat() {
            return gulp.src(
                ["lib/header.d.ts",
                 "lib/enums.d.ts",
                 "lib/classes.d.ts",
                 "lib/classes/components.d.ts",
                 "lib/classes/events.d.ts",
                 "lib/interfaces.d.ts",
                 "lib/errors.d.ts",
                 "lib/constants.d.ts"])
                .pipe(gulpConcat("index.d.ts"))
                .pipe(gulp.dest("dist"));
        });

export function watch() {
    gulp.watch([
        "lib/**",
        "package.json"
    ], {ignoreInitial: false}, build);
}

export default build;
