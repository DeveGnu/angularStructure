import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../../../core/services/testing.service';

@Component({
  selector: 'panel-uno',
  templateUrl: './panel-uno.component.html',
  styleUrls: ['./panel-uno.component.scss'],
})
export class PanelUnoComponent implements OnInit {

  public response:Array<any> = [];
  public responseDog:any = {
    message:'',
    status:'',
  };

    constructor(private testingService:TestingService) {
  }

  ngOnInit(): void {
    this.getTestData();
  } 

  public getTestData():void{
    this.testingService.getTestData((response)=>{
      this.response = response;
      console.log('Response: ', response)
    });
  }

  public getTestDataDog():void{
    this.testingService.getTestDataDog((response)=>{
      this.responseDog = response;
      console.log('Response: ', response)
    });
  }

  
}