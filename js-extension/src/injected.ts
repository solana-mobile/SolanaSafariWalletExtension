/**
 * This is an injectable script
 * It is added to the "web_accessible_resources"
 * field in manifest.json and can be injected by
 * the content script.
 *
 * It is useful for modifying the DOM of different
 * tabs easily
 */

import { register } from "./provider";

function main() {
  console.log("Injecting provider");
  register();
}

main();
