#!/usr/bin/env node
import { command, parse, version } from "commander";

// @ts-ignore
import packageJson from "../package.json";

// commands
import { commitLint } from "./commands/commit-lint";
import { clean } from "./commands/clean";

version(`@gleaning/check ${packageJson.version}`);
process.env.GLEANING_VERSION = packageJson.version;

command("clean").description("Clean all dist files").action(clean);

command("commit-lint").description("Lint commit message").action(commitLint);

parse();

export * from "./lint/eslint";
export * from "./lint/prettier";
