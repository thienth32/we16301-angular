import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formHero: any = {
    id: "",
    name: "",
    avatar: "",
    attack: 0,
    gender: "Nam"
  }

  heroes: Array<any> = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    // gửi http lên json server để lấy danh sách heroes
    // sau khi nhận đc phản hồi từ server 
    // thực hiện gán dữ liệu cho biến heroes
    this.http.get<any>("http://localhost:3000/heroes")
      .subscribe(data => {
        this.heroes = data;
      })
  }

  removeHero(hero: any){
    const url = `http://localhost:3000/heroes/${hero.id}`;
    this.http.delete<any>(url)
        .subscribe(data => {
          this.heroes = this.heroes.filter(item => item.id != hero.id);
        })
    
  }

  updateHero(hero: any){
    this.formHero = {...hero};
  }

  saveForm(){
    // spread operator
    const formData = {...this.formHero};
    
    if(formData.id == ""){
      this.http.post<any>("http://localhost:3000/heroes", formData)
          .subscribe(data => {
            this.heroes.push(data);
          })
    }else{
      const url = `http://localhost:3000/heroes/${formData.id}`;
      this.http.put<any>(url, formData)
          .subscribe(data => {
            const ind = this.heroes.findIndex(item => item.id == data.id);
            this.heroes[ind] = data;
          })
    }
    
    this.formHero = {
      id: "",
      name: "",
      avatar: "",
      attack: 0,
      gender: "Nam"
    }
  }

  childRemove(data: any){
    this.heroes = this.heroes.filter(item => item.id != data.id);
  }
}
