import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetTrendsService } from './trends.component.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  Alltrends: any[]
  username: any

  constructor(private router:Router,
      private productservice:GetTrendsService,
      private service:GetTrendsService) { 
     this.loadflag()
      
     if(localStorage['login_status']!='0')
     {
      this.username = localStorage['username']
     }
     productservice.gettrends().subscribe((response)=>{
      if(response['status']=='success')
      {
          this.Alltrends = response['data']      
      }
      else{
          alert('error')
          console.log(response['error'])
          
      }
    })
       this.loadAlltrends()
  }

loadAlltrends() {
  this.service
    .getAlltrends()
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.Alltrends = response['data']
      } else {
        alert('error')
      }
    })
    localStorage['onBack'] = 'user'
}


  loadflag()
  {
      if(localStorage['flag']=='0')
      {
          window.location.reload();
          localStorage['flag']='1'
      }
  }
  ngOnInit() { 
  
  }


OnSelectProduct(id: number) {
  this.router.navigate(['/MRlogin/trend_details/'+id])
}


}


