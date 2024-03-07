import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as countries from 'i18n-iso-countries';
import { ToastrService } from 'ngx-toastr';
import { IMembers } from 'src/app/Interface/IMembers';
import { MemebersService } from 'src/app/Services/memebers.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  inscriptionForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    date: new FormControl(''),
    country: new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.pattern('^[0-9]*$') 
    ]),
    email: new FormControl(''),
  });

  countriesList: { name: string; code: string }[] = [];

  constructor(private membersService: MemebersService, private toastr: ToastrService) {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json")); 
    this.countriesList = Object.entries(countries.getNames("en")).map(([code, name]) => ({ code, name }));
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formValue: Partial<IMembers> = {
        firstName: this.inscriptionForm.value.firstName || '', 
        lastName: this.inscriptionForm.value.lastName || '',
        date: this.inscriptionForm.value.date || '',
        country: this.inscriptionForm.value.country || '',
        phone: this.inscriptionForm.value.phone || '',
        email: this.inscriptionForm.value.email || '',
      };
  
      this.membersService.addMember(formValue).subscribe({
        next: (member) => {
          this.toastr.success('Inscription réussie!', 'Succès');        },
        error: (error) => {
          this.toastr.error('Une erreur est survenue lors de l\'inscription.', 'Erreur');        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
  
}
