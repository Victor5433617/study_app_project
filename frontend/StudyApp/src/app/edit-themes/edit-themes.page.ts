import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import axios from 'axios';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-edit-themes',
  templateUrl: './edit-themes.page.html',
  styleUrls: ['./edit-themes.page.scss'],
})
export class EditThemesPage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  temas : any = {};

  constructor(private toastController: ToastController,
   private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //this.message = this.data.getMessageById(parseInt(id, 10));
    axios.get("http://localhost:3000/themes/" + id)
    .then( result => {
      if (result.data.success == true) {

        if( result.data.temas != null){
          this.temas = result.data.temas;
        }else{
          this.temas = {};
        }
       
      } else {
        console.log(result.data.error);
      }
      
    }).catch(error => {
      console.log(error.message);
    })
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
    

    
  }

  saveThemes(){
    console.log("Temas", this.temas);
    var data = {
      id : this.temas.id,
      create_date: this.temas.create_date,
      name: this.temas.name,
      description: this.temas.description,
      keywords: this.temas.keywords,
     

    }

    axios.post("http://localhost:3000/themes/update" , data)
    .then(  async result => {
      if (result.data.success == true) {
        this.presentToats ("Tema Guardado!!!");
          this.router.navigate(["/themes"]);
      } else {
        this.presentToats (result.data.error );
        
      }
      
    }).catch( async error => {
      this.presentToats (error.message.data.error );
    })
  }

  async presentToats (message : string){
    const toast = await this.toastController.create({
      message:message,
      duration: 1500,
      position: 'bottom',
      });

    await toast.present();
  }
}
