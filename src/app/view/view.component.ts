import { Component, OnInit } from "@angular/core";
import { UsersService } from "./../users.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  persons: [];

  person1 = { id: 6, name: "aditya" };
  constructor(private api: UsersService) {}

  ngOnInit() {}
  displayUsers() {
    this.api.listOfUsers().subscribe(
      data => {
        console.log(data);
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteUser(id: 2) {
    this.api.deleteUsers(id).subscribe(
      data => {
        console.log(data);
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  postUser(payload = this.person1) {
    this.api.postUsers(payload).subscribe(
      data => {
        console.log(data);
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
