import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Shared {

  cosnstructor() { 

    console.log('shared service initialized' )
  }



  function1test(): any {

        console.log('function1 from shared service' )

        return 10

}
  

}

