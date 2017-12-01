import { Component, OnInit } from '@angular/core';
import { TestsServices } from '../services/tests.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
  providers: [TestsServices]
})
export class TestsComponent implements OnInit {
  createTest: FormGroup;
  updateTest: FormGroup;
  searchControl = new FormControl();
  courses;
  course;
  idcourses: number;
  edTest;
  constructor(private testsServices: TestsServices, private fb: FormBuilder) { }
  getAll(): void {
    this.testsServices.getAll().then(res => this.courses = res);
  }
  ngOnInit() {
    this.getAll();
    this.createTest = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', [Validators.required]],
      idteacher:['',[Validators.required]],
      description:['',[Validators.required]]
    });
    // this.searchControl.valueChanges.subscribe(value => {
      
    //   if (value === '') this.getAll();
     
    //   else
    //     this.testsServices.getName(value).then(res => this.courses = res);
    // });

  }
  // delete(id: number): void {
  //   this.testsServices.delete(id)
  //     .then(() => this.getAll());
  // }
  delete(id: number): void {
    this.idcourses = id;
  }
  confirmDelete(): void {
    this.testsServices.delete(this.idcourses).then(() => this.getAll());
  }


  onCreate(): void {
    this.testsServices.create(this.createTest.value).then(cus => this.getAll());
    this.createTest.reset({
      name: '',
      price: '',
      idteacher:'',
      description:'',
    });
  }
  edit(course) {
    this.updateTest = this.fb.group({
      idcourses: [course.idcourses],
      name: [course.name, [Validators.required, Validators.maxLength(100)]],
      price: [course.price, [Validators.required]],
      idteacher:[course.idteacher, [Validators.required]],
      description:[course.description, [Validators.required]]
    });
    // tslint:disable-next-line:no-unused-expression
  }
  onUpdate(): void {
    this.testsServices.update(this.updateTest.value)
      .then(cus => {
        this.getAll();
      });
  }
}
