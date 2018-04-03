import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component ({
    template: `<h3>You seaaalected {{JobId}} {{ JobName }}</h3>`
})
export class JobDetailComponent implements OnInit {
    public JobName;
    public JobId;

    constructor(private route: ActivatedRoute){}
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.JobId = id;
        let name = this.route.snapshot.params['name'];
        this.JobName = name;
        
    }
    

 }