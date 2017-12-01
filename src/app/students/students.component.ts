import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { GraduatesService} from'../services/graduates.service';

//import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[GraduatesService]
})
export class StudentsComponent implements OnInit {
  createStu: FormGroup;
  updateStu: FormGroup;
  searchControl = new FormControl();
  students;
  student;
  idstudent: number;
  name;
  address;
  infomations;
  dels;
  email;
  edStu;
  valiEmail = false;

  constructor(private studentsService: StudentsService,  private graduatesService: GraduatesService, private fb: FormBuilder) { }

  // tslint:disable-next-line:one-line
  getAll(): void {
    this.studentsService.getAll().then(res => this.students = res);
  }

  ngOnInit() {
    this.getAll();

    this.createStu = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      address: ['',[Validators.required]]
    });

    this.searchControl.valueChanges.subscribe(value => {
      // tslint:disable-next-line:curly
      if (value === '') this.getAll();
      // tslint:disable-next-line:curly
      else
        this.studentsService.getName(value).then(res => this.students = res);
    });

    this.createStu.valueChanges.subscribe(value => {
      this.newFunction(value);
      this.studentsService.getEmailExists(value.email).then(res => {
        // tslint:disable-next-line:curly
        if (res)
          this.valiEmail = true;
        // tslint:disable-next-line:curly
        else
          this.valiEmail = false;
      });
    });
  }

  private newFunction(value: any) {
    // tslint:disable-next-line:curly
    if (value.email === '')
      this.valiEmail = false;
  }

  // delete(id: number): void {
  //   this.studentsService.delete(id)
  //     .then(() => this.getAll());
  // }
  
  delete(id: number): void {
    this.idstudent = id;
  }
  confirmDelete(): void {
    this.studentsService.delete(this.idstudent).then(() => this.getAll());
  }

  onCreate(): void {
    this.studentsService.create(this.createStu.value).then(cus => this.getAll());
    this.createStu.reset({
      name: '',
      email: '',
      address: ''
    });
  }

  trackByStudent(stu) {
    return stu.idstudent;
  }

  // tslint:disable-next-line:one-line
  edit(stu) {
    this.updateStu = this.fb.group({
      idstudent: [stu.idstudent],
      name: [stu.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: [stu.email, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      address: [stu.address, [Validators.required]]
    });

    this.updateStu.valueChanges.subscribe(value => {
      // tslint:disable-next-line:curly
      if (value.email === '')
        this.valiEmail = false;
      this.studentsService.getEmailExists(value.email).then(res => {
        // tslint:disable-next-line:curly
        if (res)
          this.valiEmail = true;
        // tslint:disable-next-line:curly
        else
          this.valiEmail = false;
      });
    });
  }

  // tslint:disable-next-line:one-line
  onUpdate(): void {
    this.studentsService.update(this.updateStu.value)
      .then(cus => {
        this.getAll();
      });
  }
  // gotoBack(): void {
  //   this.router.navigate(['/students']);
  // }
  view(student){
    this.name = student.name;
    this.email = student.email;
    this.address = student.address;
    this.graduatesService.getStudent(student.idstudent).then(res => this.infomations = res);
  }
  // deleteifo(id: number)
  // {
  //   this.testsServices.delete(id)
  //   .then(() => this.getAll());
  // }
}
