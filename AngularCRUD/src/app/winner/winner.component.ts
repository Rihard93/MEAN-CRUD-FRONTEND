import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WinnerService } from '../shared/winner.service';
import { Winner } from '../shared/winner.model';

//TOAST notifications
declare var M : any;

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css'],
  providers: [WinnerService]
})
export class WinnerComponent implements OnInit {

  constructor(private winnerService: WinnerService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshWinnerList();
  }

  //Metodo para limpiar los campos del form
  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.winnerService.selectedWinner = {
        _id: "",
        year: null,
        winner: "",
        runnerup:"",
        result: "",
        mvp: ""
      }
  }

  //Metodo para ingresar los datos a la base de datos (CREATE OPTION)
  onSubmit(form : NgForm){
    if (form.value._id == ""){
      this.winnerService.postWinner(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshWinnerList();
        M.toast({html: 'Winner added!', classes: 'rounded'});
      });
   }
   else{
    this.winnerService.putWinner(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshWinnerList();
      M.toast({html: 'Winner updated!', classes: 'rounded'});
    });     
   }
  }

  //Metodo para leer los registros de la base (READ OPTION)
  refreshWinnerList(){
    this.winnerService.getWinnerList().subscribe((res) => {
      this.winnerService.winners = res as Winner[];
    });
  }

  //Metodo para editar la informacion de la base (UPDATE OPTION)
  onEdit(win : Winner){
    this.winnerService.selectedWinner = win;
  }

  //Metodo para eliminar la informacion de la base (DELETE OPTION)
  onDelete(_id : string, form : NgForm){
    if (confirm('Do you want to delete this winner?') == true){
      this.winnerService.deleteWinner(_id).subscribe((res) => {
        this.refreshWinnerList();
        this.resetForm(form);
        M.toast({html: 'Winner deleted!', classes: 'rounded'});
      });
    }
  }  

}
