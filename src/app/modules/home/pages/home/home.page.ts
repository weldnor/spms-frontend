import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => {
      console.log(value);
    });
  }

}
