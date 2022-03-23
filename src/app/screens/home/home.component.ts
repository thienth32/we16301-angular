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

  listStudent(keyword: string = ""){
    this.studentService.list(keyword).subscribe(data => {
      this.students = data;
    });
  }
  search(e: any){
    let keyword = e.target.value;
    this.listStudent(keyword);
  }
}
