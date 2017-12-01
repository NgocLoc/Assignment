import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { GraduatesService} from'../services/graduates.service';
import { TestsServices} from'../services/tests.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-greduates',
  templateUrl: './greduates.component.html',
  styleUrls: ['./greduates.component.css'],
  providers:[GraduatesService, TestsServices]
})
export class GreduatesComponent implements OnInit {
  createGre: FormGroup;
  updateGre: FormGroup;
  searchControl = new FormControl();
  greduates;
  greduate;
  idgraduate : number;
  edGre;

  constructor(
    private studentsService: StudentsService,  private graduatesService: GraduatesService, private testsServices: TestsServices,  private fb: FormBuilder
  ) { }
  getAll(): void {
    this.graduatesService.getAll().then(res => this.greduates = res);
  }
  ngOnInit() {
    this.getAll();
  }
  // delete(id: number): void {
  //   this.graduatesService.delete(id)
  //     .then(() => this.getAll());
  // }
  delete(id: number): void {
    this.idgraduate = id;
  }
  confirmDelete(): void {
    this.graduatesService.delete(this.idgraduate).then(() => this.getAll());
  }
}
