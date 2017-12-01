import { Component, OnInit } from '@angular/core';
import { GraduatesService } from '../services/graduates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.css'],
  providers: [GraduatesService, TeachersService]
})
export class GraduatesComponent implements OnInit {
gradautes;
teachers;
id: number = +this.route.snapshot.paramMap.get('id');
create;
searchControl = new FormControl();
arrayAdd = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teachersService: TeachersService,
    private graduatesService: GraduatesService,
    private fb: FormBuilder
  ) { }
  getAll() {
    return this.teachersService.getAll().then(res => this.teachers = res);
  }

  ngOnInit() {
    this.getAll();
    // this.searchControl.valueChanges.subscribe(value => {
    //   value == "" ? this.getAll() : this.teachersService.getName(value).then(res => this.tests = res);
    // });
  }
  add(idteachers){
    this.create = {course: {idcourse: this.id}, teacher:{idteacher: idteachers}};
  }
  save() {
    this.graduatesService.create(this.create).then(() => this.getAll());
  }
  gotoBack(): void {
    this.router.navigate(['/students']);
  }

}
