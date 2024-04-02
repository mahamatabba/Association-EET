import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MemebersService } from 'src/app/Services/memebers.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {

  numberMembers?: number;
  lastMessage?: string;
  lastMessageDetails?: any; 
  today = new Date();


  constructor(private membersService: MemebersService, private router: Router) {}

  ngOnInit() {
    this.getNumberMembers();
    this.getLastMessageDetails();
  }

  getNumberMembers() {
    this.membersService.getNumberMembers().subscribe({
      next: (count) => {
        this.numberMembers = count;
      },
      error: (error) => console.error('There was an error fetching the number of members', error)
    });
  }

  getLastMessageDetails() {
    this.membersService.getLastMessage().subscribe({
      next: (details) => {
        this.lastMessageDetails = details;
  
        console.log('Last message details:', this.lastMessageDetails);
      },
      error: (error) => console.error('There was an error fetching the last message details', error)
    });
  }
  

  navigateToGetAllMessages() {
    console.log('Navigating to application page...');
  }


  navigateToGetAllMembers() {  
    this.router.navigate(['admin/show_membre']);
  }


}
