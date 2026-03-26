const assert = require("node:assert/strict");
const test = require("node:test");

const { loadMainContext, FakeHTMLElement } = require("./helpers/load-main-testables");

const ctx = loadMainContext();
const PluginClass = ctx.module.exports;

function createContainer(children) {
  const container = new FakeHTMLElement("div");
  for (const child of children) container.appendChild(child);
  return container;
}

test("section sync groups only #### headings under Directions", () => {
  const plugin = new PluginClass();
  const container = createContainer([
    new FakeHTMLElement("h3", "Directions"),
    new FakeHTMLElement("h4", "Biscuits"),
    new FakeHTMLElement("p", "Cream butter and sugar."),
    new FakeHTMLElement("h5", "Do not use this as a group"),
    new FakeHTMLElement("h4", "Passionfruit Butter Cream"),
    new FakeHTMLElement("p", "Whisk lemon juice and passionfruit pulp."),
    new FakeHTMLElement("h3", "Notes"),
  ]);

  const groups = plugin.collectSubheadingGroups(container, "directions");
  const keys = Array.from(groups, (group) => group.key);
  assert.deepEqual(
    keys,
    ["biscuits", "passionfruit butter cream"]
  );
});
