import { Component, OnInit, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from '@angular/core';
import { CommonServiceService } from 'src/app/common-services/common-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "shop";
  cartValue: any = 0;
  enableBack: any;
  backButtonOn: any;
  constructor(private commonService: CommonServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.commonService.viewCartDetails.subscribe((obj) => {
      this.cartValue = obj;
    });
    this.commonService.enableBackDetails.subscribe((item) => {
      this.enableBack = item;
      console.log(this.enableBack, "this.enableBack")
    });
  }

  back(){
    window.history.back();
  }

  viewCartList(){
    this.route.navigate(['/view-cart-list']);
  }

  shop(){
    this.route.navigate(['']);
  }

  ngDoCheck(){
    if(this.enableBack){
      this.backButtonOn = true;
    }else{
      this.backButtonOn = false;
    }
  }

  

}
