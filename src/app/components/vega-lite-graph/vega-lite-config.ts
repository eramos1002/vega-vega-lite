export default {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with ranged data (aka Gantt Chart).",
    "data": {
      "values": null
    },
    "mark": "bar",
    "encoding": {
      "y": {"field": "task", "type": "ordinal"},
      "x": {"field": "start", "type": "quantitative"},
      "x2": {"field": "end"}
    }
  }
  ;
  