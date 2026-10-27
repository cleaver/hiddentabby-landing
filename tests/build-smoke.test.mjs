import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const distPath = fileURLToPath(new URL("../dist/", import.meta.url));

async function readPage(name) {
  return readFile(new URL(`../dist/${name}`, import.meta.url), "utf8");
}

test("build emits the homepage and clean canonical privacy policy URL", async () => {
  const [home, privacy] = await Promise.all([readPage("index.html"), readPage("privacy.html")]);

  assert.match(home, /<title>HiddenTabby — room for every part of your day<\/title>/);
  assert.match(home, /href="\/privacy"/);
  assert.match(home, /rel="canonical" href="https:\/\/hiddentabby\.com\/"/);
  assert.match(privacy, /<title>Privacy Policy — HiddenTabby<\/title>/);
  assert.match(privacy, /rel="canonical" href="https:\/\/hiddentabby\.com\/privacy"/);
  assert.match(privacy, /Effective October 22, 2026/);
});

test("feature switcher renders accessible controls for all three features", async () => {
  const home = await readPage("index.html");

  for (const feature of ["manage", "switch", "move"]) {
    assert.match(home, new RegExp(`workspace-features-tab-${feature}`));
  }
  assert.match(home, /role="tablist" aria-label="Explore HiddenTabby features"/);
  assert.match(home, /role="tabpanel"/);
  assert.match(home, /<script type="module">[\s\S]*ArrowRight[\s\S]*ArrowLeft[\s\S]*<\/script>/);
});

test("privacy page discloses browsing activity, API use, and Limited Use", async () => {
  const privacy = await readPage("privacy.html");

  for (const disclosure of [
    "web browsing activity",
    "tabGroups",
    "sessions",
    "contextMenus",
    "chrome.storage.local",
    "Limited Use requirements",
    "does not load or execute remotely hosted code",
  ]) {
    assert.ok(privacy.includes(disclosure), `Expected privacy page to include: ${disclosure}`);
  }
});

test("local image assets referenced by the homepage are present in the build", async () => {
  const home = await readPage("index.html");
  const assetPaths = [...new Set(home.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g))]
    .map((match) => match[1]);
  const stylesheetPath = home.match(/<link rel="stylesheet" href="([^\"]+\.css)"/);

  assert.ok(assetPaths.length > 0, "Expected homepage to reference local image assets");
  assert.ok(stylesheetPath, "Expected Astro to link a built stylesheet");

  await Promise.all([
    ...assetPaths.map((assetPath) => access(`${distPath}${assetPath.slice(1)}`)),
    access(`${distPath}${stylesheetPath[1].slice(1)}`),
  ]);
});
