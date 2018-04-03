import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component ({
    template: `<h3>You selected {{departmentId}}</h3>`
})
export class DepartmentDetailComponent implements OnInit {
    public departmentId;
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.departmentId = id;
    }

 }