import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tweet } from './interfaces/tweet';
import { Tab2Page } from './tab2/tab2.page';
import { TwitterService } from './twitter.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {


  public list = [];
  public page: Tab2Page;


  constructor(
    private storage: Storage,
    public twitterService: TwitterService
  ) { }

  array = [1, 2, 3, 4, 5];

  saveTweet(): void {
    this.storage.clear();
    this.list.map(item =>
      this.storage.set(item.id.toString(), item))
  }


  getAllFavorites() {
    this.list = [];
    var promise = new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        this.list.push(value);
      }).then((d) => {
        resolve(this.list);
        console.log(this.list)
      });
    });
    return promise;
  }

  pushToFavorites(tweet: Tweet) {

    for (var i = 0; i < this.list.length; i++) {

      if (tweet.id == this.list[i].id) {
        this.splice(tweet.id);
        return
      }
    }
    this.list.push(tweet);
  }

  splice(id: string) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
      }
    }
    for (var i = 0; i < this.page.tweets.length; i++) {
      if (this.page.tweets[i].id === id) {
        this.page.tweets[i].isFavorite = false;
      }
    }
  }


}


