import { Component, OnInit } from '@angular/core';
import * as DynamoDB from "aws-sdk/clients/dynamodb";
import * as AWS from "aws-sdk"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-aws-repro',
  templateUrl: './aws-repro.component.html',
  styleUrls: ['./aws-repro.component.scss']
})
export class AwsReproComponent implements OnInit {

  public dynamoDB: DynamoDB.DocumentClient;

  constructor(
    private authService: AuthService
  ) { 
    this.dynamoDB = new DynamoDB.DocumentClient;
  }

  ngOnInit(): void {
    AWS.config.update({
      region: "us-east-1"
    });
  }

}
