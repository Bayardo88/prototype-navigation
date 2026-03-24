You are modifying an existing financial analytics table prototype. The table currently supports dynamic columns and displays metrics for companies on a Firm Summary page.

Implement the following product requirements and UX improvements.

---

FEATURE 1 — CONFIGURABLE COLUMN TYPE (Breakeven)

We need a column type called **Breakeven** that requires a numeric input when the column is added.

Behavior:
• The analyst can add a Breakeven column from the "Add Column" modal.
• When Breakeven is selected, show an input field called **Breakeven Multiple**.
• The analyst can enter a number such as 1.0, 2.0, 2.5, 10.0.
• This multiplier becomes a configuration parameter for the column.

Example:

Breakeven (1x)
Breakeven (2x)
Breakeven (5x)

The same column type can be added multiple times with different multipliers.

Example table:

Company | Breakeven (1x) | Breakeven (3x)
Acme    | 10M            | 30M
Nova    | 8M             | 24M

Implementation requirements:
• Columns must support configuration parameters.
• Store the multiplier inside the column configuration.
• The column header must display the multiplier (example: "Breakeven (2x)").
• The calculation should use the multiplier when generating values.

Column structure should support:

{
id: string
metricKey: string
config?: {
multiplier?: number
}
}

---

FEATURE 2 — ROW LEVEL OVERRIDE (Enterprise Value)

Add a special editable cell type for **Enterprise Value**.

Default behavior:
• Enterprise Value is normally calculated automatically.
• It appears as a standard black number.

Override behavior:
• The user can click the Enterprise Value cell.
• The value becomes editable.
• The user can enter a different number.
• When overridden, the value turns **blue**.

This override is temporary and not saved.

The override must trigger recalculation of dependent metrics:

• Unrealized Value
• MOIC
• IRR

These recalculated values should also be visually distinguished from stored values.

Row override data structure:

{
[companyId]: {
enterpriseValue?: number
}
}

When an override exists:
• use the override value
• otherwise use the calculated value

---

FEATURE 3 — SCENARIO MODE (UX IMPROVEMENT)

When any Enterprise Value override exists, the table enters **Scenario Mode**.

Add a banner above the table:

⚡ Scenario Mode Active
Enterprise Values have been overridden to simulate returns.
These values are not saved.

Include a button:

Reset Scenario

Clicking Reset Scenario removes all overrides.

---

FEATURE 4 — VISUAL INDICATORS FOR SIMULATED VALUES

To make simulated values obvious to analysts:

1. Overridden Enterprise Values should:
   • appear in blue
   • include a small approximation indicator

Example:
≈ 180M

2. Dependent recalculated metrics should:
   • appear in blue
   • have a subtle background highlight

Example styling:
blue text + light blue background.

3. Add a tooltip on overridden values:

"Simulated value. Metrics are recalculated using this Enterprise Value."

---

FEATURE 5 — COLUMN HEADER INDICATOR

When Scenario Mode is active:

Add a small ⚡ indicator in the Enterprise Value column header.

Example:

Enterprise Value ⚡

This signals that calculations are currently simulated.

---

FEATURE 6 — RESETTING INDIVIDUAL OVERRIDES

Each overridden Enterprise Value cell should support resetting.

Interaction options:
• small reset icon
• or right-click reset

Reset removes the override and returns to the calculated value.

---

EXPECTED RESULT

The table should support:

1. Multiple configurable Breakeven columns with different multipliers.
2. Editable Enterprise Value cells per company.
3. Automatic recalculation of Unrealized Value, MOIC, and IRR when overrides exist.
4. Scenario Mode with a banner and reset option.
5. Clear visual distinction between real and simulated values.

All behavior should integrate with the existing dynamic column system and table structure.
