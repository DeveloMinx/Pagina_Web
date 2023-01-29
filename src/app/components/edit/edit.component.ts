import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup} from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router'

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataUser: any;
  public editForm: FormGroup
  postRef:any
  constructor(
    private afAuth: AngularFireAuth,
    public postService:PostService,
    public formBuilder:FormBuilder,
    public activeRoute:ActivatedRoute,
    public router:Router
  ) {
    this.editForm=this.formBuilder.group({
      name:[''],
      descrip:[''],
      value:[''],
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe(res =>{
      this.postRef = res
      this.editForm = this.formBuilder.group({
        name:[this.postRef.name],
        descrip:[this.postRef.descrip],
        value:[this.postRef.value],
      })
    })

    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified) {
        this.dataUser = user; 
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
  onSubmit(){
    const id= this.activeRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value, id)
    this.router.navigate(['/dashboard'])
  }

}
