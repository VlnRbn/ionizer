import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  segmentVal: string = "home";

  //DOM Props
  activeIndex = 0;
  @ViewChildren('headerCards') catagoryHeaderCards: QueryList<ElementRef>

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSegmentsPage');
  }

  categories = [
    { title: 'Insurence', catagotyId: null },
    { title: 'Mobile', catagotyId: 3 },
    { title: 'Gas', catagotyId: 861 },
    { title: 'Electricity', catagotyId: 12 },
    { title: 'Water', catagotyId: 8 },
    { title: 'Car Insurance', catagotyId: 13 },
  ]

  slideTo(i) {
    this.activeIndex = i;
    this.slides.slideTo(i);
    // this.superTabs.slideTo(i);
  }

  onTabSelect(ev) {
    let index = this.slides.getActiveIndex();
  }


  // segmentChanged(e) {
  //   console.log(e);
  //   if (this.segmentVal == "bookmarks") {
  //     this.slides.slideTo(1);
  //   } else {
  //     this.slides.slideTo(0);
  //   }
  // }

  slideChanged() {
    this.activeIndex = this.slides.getActiveIndex();
    let val = this.catagoryHeaderCards.find((el, i) => {
      return i == this.activeIndex
    })
    val.nativeElement.scrollIntoView({ behavior: "smooth" });

  }

}
