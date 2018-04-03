import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component ({   
    selector: 'Job-list',
    template: `<ul class="items">
    <li (click)="onSelect(Job)" *ngFor="let Job of Jobs">
    <span> {{Job.id}}</span> {{Job.name}}
    </li>
    </ul>  `
})
export class JobListComponent {
    constructor(private router: Router){}
    Jobs = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "React"},
        {"id": 3, "name": "Node"},
    ]
    onSelect(Job){
        this.router.navigate(['/Jobs', Job.name]);
    }
}