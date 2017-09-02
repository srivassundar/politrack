import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { NgClass, NgStyle}           from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Official, Resource } from './../official';

@Component({
  selector: 'progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./../official-detail/official-detail.component.css']
})

export class ProgressBarsComponent implements OnInit {
  @Input() isDetail: boolean;
  @Input() resources: Resource[];
  progress_volunteer: number; // Percentage of progress (0 - 1.0)
  needed_volunteer: number; // Number of volunteers needed
  progress_funding: number; // Percentage of progress (0 - 1.0)
  needed_funding: number; // Number of fundings needed
  progress_donation: number; // Percentage of progress (0 - 1.0)
  needed_donation: number; // Number of donations needed

  types : string[] = ['volunteer', 'funding', 'donation'];

  ngOnInit(): void {
    this.calculateProgress();
  }

  helpOut(resource_type: string): void {
    this.resources.find(resource => {
      return resource.type == resource_type;
    }).current_number += 1;
    this.calculateProgress();
  }

  calculateProgress(): void {
    var ideal_sum = {
      'volunteer':0,
      'funding' : 0,
      'donation': 0
      };
    var current_sum = {
      'volunteer':0,
      'funding' : 0,
      'donation': 0
      };

    this.resources.forEach(resource => {
      ideal_sum[resource.type] += resource.ideal_number;
      current_sum[resource.type] += resource.current_number;
    });
    this.types.forEach(type => {
      var key = ['progress_', type].join('')
      this[key] = Math.round(current_sum[type]/ideal_sum[type]*100);

      key = ['needed_', type].join('')
      this[key] = ideal_sum[type]-current_sum[type];
    })

  console.log("progress_volunteer = " + this.progress_volunteer);
  console.log("needed_volunteer = " + this.needed_volunteer);
  console.log("progress_funding = " + this.progress_funding);
  console.log("needed_funding = " + this.needed_funding);
  console.log("progress_donation = " + this.progress_donation);
  console.log("needed_donation = " + this.needed_donation);
  }
}