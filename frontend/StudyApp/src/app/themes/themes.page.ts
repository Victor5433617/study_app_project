import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import axios from 'axios';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'themes.page.html',
  styleUrls: ['themes.page.scss'],
})
export class ThemesPage implements OnInit{
  private data = inject(DataService);

  temas : any = [];

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

    this.saveThemes();
  }

  ngOnInit(): void {
    //this.getUsers();
  }

  saveThemes () {
    let token = localStorage.getItem("token");

    let config ={
      headers : {
      "Authorization" : token
    }
    }
    
    
    axios.get("http://localhost:3000/themes/list", config)
    .then( result => {
      if (result.data.success == true) {
        this.temas = result.data.temas;
      } else {
        console.log(result.data.error);
      }
      
    }).catch(error => {
      console.log(error.message);
    })
  }
}
