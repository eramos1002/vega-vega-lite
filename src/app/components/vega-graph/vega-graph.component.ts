import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';
import spec from '../vega-graph/vega-config';

@Component({
  selector: 'app-vega-graph',
  //template <div id="vis"> </div>
  templateUrl: './vega-graph.component.html',
  //styleUrls: ['./vega-graph.component.css']
})
export class VegaGraphComponent implements OnInit {

  ngOnInit() {
    fetch('http://192.168.10.72:2003/top10racks')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('data procedente del fetch', data);

        spec.data[0].values = data.result.data;

        console.log('spec', spec);

        embed("#vis", spec, { actions: false });
    })
    .catch((err) =>  {
        console.error(err);
    });
  }
}