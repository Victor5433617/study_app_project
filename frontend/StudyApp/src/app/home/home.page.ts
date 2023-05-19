import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import axios from 'axios';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private data = inject(DataService);

  usuarios : any = [];

  constructor(private router: Router) {
    
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  
  ionViewWillEnter(): void {

    

     // verificar si es que mi el usuario no esta logeado
     let token = localStorage.getItem("token");


     
     if(!token){
       this.router.navigate(["/login"]);
       return;
     }
    this.getUsers();
  }

  ngOnInit(): void {
    //this.getUsers();
  }

  getUsers () {
    let token = localStorage.getItem("token");

    let config ={
      headers : {
      "Authorization" : token
    }
    }
    
    axios.get("http://localhost:3000/users/list", config)
    .then( result => {
      if (result.data.success == true) {
        this.usuarios = result.data.usuarios;
      } else {
        console.log(result.data.error);
      }
      
    }).catch(error => {
      console.log(error.message);
    })
  }
}
