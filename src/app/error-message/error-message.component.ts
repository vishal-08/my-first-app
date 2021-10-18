import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  message ='Page not Found !!!!'

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.message = this.router.snapshot.data['message']
    this.router.data.subscribe((data : Data) => {
      this.message = data['message']
    })
   }

}
