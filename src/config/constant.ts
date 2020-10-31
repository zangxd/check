import { existsSync } from "fs-extra";
import { join, dirname, isAbsolute } from "path";

function findRootDir(dir: string): string {
  if (dir === "/") {
    return "/";
  }

  if (existsSync(join(dir, "muld.config.js"))) {
    return dir;
  }

  return findRootDir(dirname(dir));
}

// Colors

// Root paths
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const ES_DIR = join(ROOT, "es");
export const LIB_DIR = join(ROOT, "lib");
export const CACHE_DIR = join(ROOT, "node_modules/.cache");

// Relative paths
export const DIST_DIR = join(__dirname, "../../dist");
export const CONFIG_DIR = join(__dirname, "../config");
