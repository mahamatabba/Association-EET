import { Injectable } from '@angular/core';
import { ApiRequestService } from '../Utils/api-request.service';
import { Observable, tap } from 'rxjs';
import { IMembers } from '../Interface/IMembers';

@Injectable({
  providedIn: 'root'
})
export class MemebersService {

  constructor(private apiRequest: ApiRequestService) { }

  addMember(member: Partial<IMembers>): Observable<IMembers> {
    return this.apiRequest.post<IMembers>('api/Users/addMembers', member);
  }

  getNumberMembers(): Observable<number> {
    return this.apiRequest.get<number>('api/Users/members/count');
  }

  getLastMessage(): Observable<string> {
    return this.apiRequest.get<string>('api/Contacts/lastContact');
  }

  getAllMembers(): Observable<IMembers[]> {
    return this.apiRequest.get<IMembers[]>('api/Users/GetAllmembers');
  }
  

}
