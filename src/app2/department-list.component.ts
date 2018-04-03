import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component ({   
    selector: 'department-list',
    template: `<ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
    <span> {{department.id}}</span> {{department.name}}
    </li>
    </ul>  `
})
export class DepartmentListComponent {
    constructor(private router: Router){}
    departments = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "React"},
        {"id": 3, "name": "Node"},
    ]
    onSelect(department){
        this.router.navigate(['/departments', department.id]);
    }
}