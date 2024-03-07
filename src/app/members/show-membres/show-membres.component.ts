import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IMembers } from 'src/app/Interface/IMembers';
import { MemebersService } from 'src/app/Services/memebers.service';

@Component({
  selector: 'app-show-membres',
  templateUrl: './show-membres.component.html',
  styleUrls: ['./show-membres.component.scss']
})
export class ShowMembresComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'phone', 'country', 'date', 'createdAt'];
  dataSource = new MatTableDataSource<IMembers>();

  constructor(private membersService: MemebersService) {}

  ngOnInit() {
    this.membersService.getAllMembers().subscribe(members => {
      this.dataSource.data = members;
    });

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase();
      return dataStr.indexOf(filter) != -1;
    };
    
  }
  editMember() {
    console.log('Edit member');
  }

  deleteMember() {
    console.log('Delete member');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  addMember() {
    console.log('Add member');
  }


}
