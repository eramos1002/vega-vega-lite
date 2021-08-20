import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';
import speclite from '../vega-lite-graph/vega-lite-config';

@Component({
  selector: 'app-vega-lite-graph',
  templateUrl: './vega-lite-graph.component.html',
  //styleUrls: ['./vega-lite-graph.component.css']
})
export class VegaLiteGraphComponent implements OnInit {

  ngOnInit() {
    fetch('http://localhost:2002')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('data procedente del fetch del SPECLITE', data);

        speclite.data.values = data.result.data;

        console.log('speclite', speclite);

        embed("#vislite", speclite, { actions: false });
    })
    .catch((err) =>  {
        console.error(err);
    });
  }

}
