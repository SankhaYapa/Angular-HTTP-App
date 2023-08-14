import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchId=""
  list:Array<any>=[]
  constructor(private postService:PostService,private _snackBar:SnackBarService){

  }

  ngOnInit(): void {
   
  }
  form=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required),


  })
  updateData():void{
    this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value,
    )
      .subscribe(response=>{
        console.log(response);
        if(response)
        {
         this._snackBar.trigger('updated','close')
        }
     
      })
  }
  
  loadData():void{
   this.postService.find(this.searchId)
   .subscribe(response=>{
     this.form.patchValue({
      id:response[0].id,
      userId:response[0].userId,
      title:response[0].title,
      body:response[0].body,
     })
   })
  }
}
