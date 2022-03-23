import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: Array<any> = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.listStudent();
  }

  listStudent(){
    this.studentService.list().subscribe(data => {
      this.students = data;
    });
  }
}
