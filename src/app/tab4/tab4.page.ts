import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import * as moment from 'moment';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private favoriteService: FavoritesService,
    private alertController: AlertController
  ) {
  }

  niceDate: any;
  favoriteData: any;

  ngOnInit() {  

  }
   ionViewWillLeave(){
     this.favoriteService.saveTweet();
   }


  deleteTweet(id: string) {
    this.favoriteService.splice(id);
   
  }

  async confirmDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Do you want to delete this tweet?',
      buttons: [
        {
          text: 'cancle'
        },
        {
          text: 'YES',
          handler: () => {
            this.deleteTweet(id);
          }
        },
      ]
    });
    await alert.present();
  }


}
