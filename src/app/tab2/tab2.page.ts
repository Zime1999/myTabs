import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { FavoritesService } from '../favorites.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})

export class Tab2Page implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private twitterService: TwitterService,
    private favoriteService: FavoritesService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public storage: Storage) {
    this.favoriteService.page = this;
  }

  data: any;
  metaData: any;
  filteredData: any;
  filtersActive: Boolean = false;
  input: string;
  sortValue: string;
  locationToggle: Boolean;
  geoSearchString: string = this.twitterService.geoSearchString;
  missingData: Boolean = false;
  visibleTopScroll: Boolean = false;
  starColor: boolean;
  public tweets: Tweet[];



  async ngOnInit() {

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    const subscription = this.twitterService.fetchData(this.locationToggle)
      .subscribe(
        (data: Tweet[]) => {
          this.tweets = data;
        },
        err => this.handleError());
    subscription.add(() => {
      loading.dismiss();
      this.tweets.length <= 0 ? this.missingData = true : this.missingData = false;
    });

    this.twitterService.activateGPS();

    this.favoriteService.getAllFavorites();
  }

  checkOnEnter(): void {
    if (this.input != "") {
      this.twitterService.getSearchText(this.input);
      this.ngOnInit();
    } else {
      this.twitterService.getSearchText("#javascript");
      this.ngOnInit();
    }
  }


  scrollToTop() {
    this.content.scrollToTop(400);
  }

  pushToFavorites(tweet: Tweet) {
    this.favoriteService.pushToFavorites(tweet);
    this.checkFavorite(tweet);
    this.starColor = !this.starColor;
  }

  public saveTweets(): void {
    this.favoriteService.saveTweet();
  }

  checkFavorite(tweet: Tweet) {
    tweet.isFavorite = this.favoriteService.list.some(item => item.id === tweet.id);
  }


  async handleError() {
    const alert = await this.alertController.create({
      header: 'Something failed',
      message: 'Please check internet-connection.',
      buttons: [
        {
          text: 'Try again',
          handler: () => {
            this.ngOnInit();
          }
        },
      ]
    });
    await alert.present();
  }

  loadMore(event) {

    const subscription = this.twitterService.fetchMoreData()
      .subscribe(

        (data: Tweet[]) => {
          data.map((item) => this.tweets.push(item))
        },
        err => this.handleError());
    subscription.add(() => event.target.complete());
  }

  scrollTester(e) {
    e.detail.scrollTop > 10 ? this.visibleTopScroll = true : this.visibleTopScroll = false;
  }




  timeOutForSearch() {
    setTimeout(function () {
      this.checkOnEnter();
    }, 3000);
  }

  checkToggle(): void {
    this.ngOnInit();
  }

  activateFilters(): void {
    this.filtersActive = !this.filtersActive;
  }


  onSelect(tweet: Tweet[]): void {
    this.twitterService.selectedTweet = tweet;
  }

  sort(): void {
    if (this.sortValue == "author") {
      this.tweets.sort((a, b) => a.user.localeCompare(b.user));
    }
    else {
      this.tweets.sort((a, b) => a.date.localeCompare(b.date));
    }
  }

  doRefresh(e: any): void {
    const subscription = this.twitterService.fetchData(this.locationToggle)
      .subscribe(
        data => (this.tweets = data),
        err => (console.log(err), this.handleError()));
    subscription.add(() => e.target.complete())
  }


}
