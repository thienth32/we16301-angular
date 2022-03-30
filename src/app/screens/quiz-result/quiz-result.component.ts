import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  student: any;
  constructor(private route: ActivatedRoute,
    private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(pam => {
      this.studentService.find(Number(pam['idStudent']))
      .subscribe(stu => {
        let subject_code = pam['monhoc'];
        console.log(stu.marks[subject_code]);
      })
    })
  }

}
