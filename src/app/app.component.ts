import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formHero: any = {
    code: "",
    name: "",
    avatar: "",
    attack: 0,
    gender: "Nam"
  }

  heroes: Array<any> = [
    {
      code: "sgk",
      name: "Songoku",
      avatar: "https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg",
      attack: 50,
      gender: "Nam"
    },
    {
      code: "wof",
      name: "Wolverine",
      avatar: "https://fandom.vn/wp-content/uploads/2019/06/mcu-wolverine-1.jpg",
      attack: 56,
      gender: "Nam"
    }
  ];

  removeHero(hero: any){
    this.heroes = this.heroes.filter(item => item.code != hero.code);
  }

  updateHero(hero: any){
    this.formHero = {...hero};
  }

  saveForm(){
    // spread operator
    const formData = {...this.formHero};
    // kiểm tra xem code trong form đã tồn tại ở trong this.heroes hay chưa
    // nếu tồn tại rồi thì cập nhật
    // nếu chưa thì tạo mới
    let index = -1;
    this.heroes.forEach((e, i) => {
      if(e.code == formData.code){
        index = i;
      }
    });

    if(index != -1){
      this.heroes[index] = formData;
    }else{
      this.heroes.push(formData);
    }
    
    this.formHero = {
      code: "",
      name: "",
      avatar: "",
      attack: 0,
      gender: "Nam"
    }
  }
}
