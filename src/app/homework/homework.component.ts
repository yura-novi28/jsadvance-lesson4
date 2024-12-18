import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe'
import { SearchFirstNamePipe } from './search-first-name.pipe'

@Component({
  selector: 'app-homework',
  imports: [CommonModule, FormsModule, SearchPipe, SearchFirstNamePipe],
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.scss'
})
export class HomeworkComponent {
  public arrUsers: Array<Users> = [];
  public modalCheck = false;
  public firstName!: string;
  public lastName!: string;
  public numberPhone!: string;
  public searchInput: string = '';
  public indexUser!: number;
  public checkEdit: boolean = false;
  public checkFilterClick = true;
  public checkSpan = false;
  public textFilerNameClick = '';
  public filterItem = '';
  addUsers(){
    this.modalCheck = true;
  }
  closeModule(){
    this.modalCheck = false;
    this.checkEdit = false;
  }
  addUsersArr(){
    if(this.checkEdit === true){
      this.arrUsers[this.indexUser].firstName = this.firstName;
      this.arrUsers[this.indexUser].lastName = this.lastName;
      this.arrUsers[this.indexUser].phone = this.numberPhone;
      this.checkEdit = false;
      this.modalCheck = false;
      this.firstName = '';
      this.lastName = '';
      this.numberPhone = '';
    }
    else{
      let obj: Users = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.numberPhone,
      }
      this.arrUsers.push(obj);
      this.modalCheck = false;
      this.firstName = '';
      this.lastName = '';
      this.numberPhone = '';
    }
  }
  deleteUser(item: Users){
    let i = this.arrUsers.findIndex(arr => arr === item);
    this.arrUsers.splice(i, 1);
    this.searchInput = '';
  }
  editUser(item: Users){
    let i = this.arrUsers.findIndex(arr => arr === item);
    this.indexUser = i;
    this.modalCheck = true;
    this.checkEdit = true;
    this.firstName = this.arrUsers[this.indexUser].firstName;
    this.lastName = this.arrUsers[this.indexUser].lastName;
    this.numberPhone = this.arrUsers[this.indexUser].phone;
  }
  filterClick(item: string){
    if(item === 'phone'){
      this.filterItem = item;
    }
    if(item === 'first'){
      this.filterItem = item;
    }
    if(item === 'last'){
      this.filterItem = item;
    }

    if(this.checkFilterClick){
      this.checkFilterClick = !this.checkFilterClick;
      this.textFilerNameClick = 'abc';
    }
    else if(!this.checkFilterClick){
      this.checkFilterClick = !this.checkFilterClick;
      this.textFilerNameClick = 'zyx';
    }
    else{
      this.textFilerNameClick = '';
    }
  }

  resetInput(){
    this.searchInput = '';
    this.checkSpan = false;
  }
  checkSpanInput(){
    this.checkSpan = this.searchInput.length > 0;
  }
}


export interface Users {
  firstName: string,
  lastName: string,
  phone: string,
}