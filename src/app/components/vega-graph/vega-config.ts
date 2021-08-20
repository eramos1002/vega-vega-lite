export default {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic bar chart example, with value labels shown upon mouse hover.",
    "width": 400,
    "height": 200,
    "padding": 5,
  
    "data": [
      {
        "name": "table",
        "values": null
      }
    ],
  
    "signals": [
      {
        "name": "tooltip",
        "value": {},
        "on": [
          {"events": "rect:mouseover", "update": "datum"},
          {"events": "rect:mouseout",  "update": "{}"}
        ]
      }
    ],
  
    "scales": [
      {
        "name": "xscale",
        "type": "band",
        "domain": {"data": "table", "field": "rack"},
        "range": "width",
        "padding": 0.05,
        "round": true
      },
      {
        "name": "yscale",
        "domain": {"data": "table", "field": "occupiedus"},
        "nice": true,
        "range": "height"
      }
    ],
  
    "axes": [
      { "orient": "bottom", "scale": "xscale" },
      { "orient": "left", "scale": "yscale","grid": true }
    ],
  
    "marks": [
      {
        "type": "rect",
        "from": {"data":"table"},
        "encode": {
          "enter": {
            "x": {"scale": "xscale", "field": "rack"},
            "width": {"scale": "xscale", "band": 1},
            "y": {"scale": "yscale", "field": "occupiedus"},
            "y2": {"scale": "yscale", "value": 0}
          },
          "update": {
            "fill": {"value": "steelblue"}
          },
          "hover": {
            "fill": {"value": "green"}
          }
        }
      },
      {
        "type": "text",
        "encode": {
          "enter": {
            "align": {"value": "center"},
            "baseline": {"value": "bottom"},
            "fill": {"value": "#333"}
          },
          "update": {
            "x": {"scale": "xscale", "signal": "tooltip.rack", "band": 0.5},
            "y": {"scale": "yscale", "signal": "tooltip.occupiedus", "offset": -2},
            "text": {"signal": "tooltip.occupiedus"},
            "fillOpacity": [
              {"test": "datum === tooltip", "value": 0},
              {"value": 1}
            ]
          }
        }
      },
      {
       "type": "rule",
       "encode": {
         "enter": {
           "stroke": {"value": "red"}
         },
         "update": {
           "x": {"value": 0},
           "y": {"value": 80},
           "x2": {"value": 400},
           "y2": {"value": 80},
           "strokeWidth": {"value": 2},
           "strokeDash": {"value": [1,0]},
           "strokeCap": {"value": "butt"}          
         }
       }
      }
    ]
  };