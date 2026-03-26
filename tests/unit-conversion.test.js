const assert = require("node:assert/strict");
const test = require("node:test");

const { loadMainContext } = require("./helpers/load-main-testables");

const ctx = loadMainContext();

function buildProfile(settings) {
  return ctx.resolveMeasurementProfile({
    measurementPreset: settings.measurementPreset,
    cupMl: settings.cupMl,
    tbspMl: settings.tbspMl,
    tspMl: settings.tspMl,
    cupShorthand: "cup",
    tbspShorthand: "tbsp",
    tspShorthand: "tsp",
  });
}

test("AU and US preset volume conversions parse as expected", () => {
  const auMap = ctx.buildUnitMapFromProfile(buildProfile({ measurementPreset: "australian" }));
  const usMap = ctx.buildUnitMapFromProfile(buildProfile({ measurementPreset: "us_customary" }));

  const auTbsp = ctx.parseIngredientLine("- 1 tbsp olive oil", auMap);
  const usTbsp = ctx.parseIngredientLine("- 1 tbsp olive oil", usMap);
  const usCup = ctx.parseIngredientLine("- 1 cup flour", usMap);

  assert.equal(auTbsp.amountMetric, 20);
  assert.equal(usTbsp.amountMetric, 14.79);
  assert.equal(usCup.amountMetric, 236.59);
});

test("temperature conversion adds metric + fan-forced values for oven lines", () => {
  const converted = ctx.convertDirectionTemperaturesToMetric("Preheat oven to 350F and bake for 20 minutes.");
  assert.match(converted, /177\u00b0C \(fan 157\u00b0C\)/);
});
