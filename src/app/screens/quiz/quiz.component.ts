import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Array<any> = [];
  subject_code: string = "";
  user_answer: Array<any> = [];
  students: Array<any> = [];
  working_student: any;
  constructor(private questionService: QuestionService,
            private studentService: StudentService,
            private route: ActivatedRoute,
            private router: Router
    ) { }

  ngOnInit(): void {
    this.getStudents();
    // 1. lấy tham số đường dẫn
    this.route.params.subscribe(pam => {
      this.subject_code = pam['monhoc'];
      this.getQuestion(this.subject_code);
    })
    // 2. gọi services để lấy danh sách câu hỏi
  }
  getStudents(){
    this.studentService.list()
      .subscribe(lstStudent => {
        this.students = lstStudent;
      })
  }
  getQuestion(code: string){
    this.questionService.list(code)
      .subscribe(lstQuestion => {
        let randArr = this.getDistinctNumberArray(10, lstQuestion.length);
        this.questions = lstQuestion.filter((el: any, ind: number) => {
          if(randArr.includes(ind)){
            return true;
          }

          return false;
        });
      })
  }

  private getDistinctNumberArray(amount: number, max: number): Array<any>{
    let arr: Array<any> = [];
    while(arr.length < amount){
      let randomNumber = Math.floor(Math.random() * max);
      if(!arr.includes(randomNumber)){
        arr.push(randomNumber);
      }
    }
    return arr;
  }
  choose(qId:number, aId:number):void{
    let existed  = -1;
    this.user_answer.forEach((el: any, index: number) => {
      if(el.qId == qId){
        existed = index;
      }
    });
    
    if(existed == -1){
      this.user_answer.push({
        qId: qId,
        aId: aId
      });
    }else{
      this.user_answer[existed].aId = aId
    }
  }

  submit(){
    let correctAnswers = 0;
    this.user_answer.forEach((ans: any) => {
      let question = this.questions.find((item: any) => item.Id == ans.qId);
      if(question.AnswerId == ans.aId){
        correctAnswers++;
      }
    });
    const score = (correctAnswers*10/this.questions.length)
    // tìm student dựa vào id
    this.studentService.find(this.working_student).subscribe((stu: any)=> {
      stu.marks[this.subject_code] = score.toFixed(2);
      this.studentService.update(stu)
      .subscribe(data => {
        this.router.navigate(['/ket-qua', data.id, this.subject_code]);
      })
    })
    
  }
}
