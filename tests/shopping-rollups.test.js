const assert = require("node:assert/strict");
const test = require("node:test");

const { loadMainContext } = require("./helpers/load-main-testables");

const ctx = loadMainContext();

test("garlic ml and clove entries roll up into estimated cloves", () => {
  const rolled = ctx.buildGarlicRollupItem([
    {
      name: "garlic",
      unit: "ml",
      amount: 1.25,
      category: "Fresh Fruit and Vegetables",
      categoryLocked: false,
      recipes: new Set(["Citrus Beans"]),
    },
    {
      name: "garlic clove",
      unit: "unit",
      amount: 1,
      category: "Fresh Fruit and Vegetables",
      categoryLocked: false,
      recipes: new Set(["Radicchio Pasta"]),
    },
  ]);

  assert.ok(rolled);
  assert.equal(rolled.name, "garlic cloves");
  assert.equal(rolled.unit, "unit");
  assert.equal(rolled.amount, 2);
  assert.equal(rolled.category, "Fresh Fruit and Vegetables");
  assert.equal(rolled.categoryReason, "garlic clove estimate");
  assert.deepEqual([...rolled.recipes].sort(), ["Citrus Beans", "Radicchio Pasta"]);
});
