import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { qustion } from './Model/Model';
import { PostAanswer} from './Model/PostAanswer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  req = "http://172.26.2.59:8001/";

  getqustions(){
    let request = new HttpRequest("GET", this.req + "allQustions");
    return this.http.request(request);
  }

  checking(password: string, email: string) {
    let url = `CheckingByPasswordAndEmail?email=${email}&password=${password}`
    let requestuser = new HttpRequest('GET', this.req + url);
    return this.http.request(requestuser);
  }

  //addUser
  adduser(firstName: string, lastName: string, password: string, email: string) {

    const url = `addUser?Firstname=${firstName}&Lasttname=${lastName}&password=${password}&email=${email}`;
    let requestuser1 = new HttpRequest("POST", this.req + url, null);
    return this.http.request(requestuser1);
  }

  // CreateQustions
  createQustions(email: string, qustions: string, qustions_title: string) {
    const url = `createQustions?email=${email}&qustions=${qustions}&qustions_title=${qustions_title}`;
    let requestuser2 = new HttpRequest("POST", this.req + url, null);
    return this.http.request(requestuser2);

  }

  //Post Answers
  postAnswering(email: string, Answers: string, model:qustion) {
    const url = `postAnswering?email=${email}&Answers=${Answers}`;
    let body={
      model
    }
    let requestuser2 = new HttpRequest("POST", this.req + url,model);
    return this.http.request(requestuser2);
  }

  //Get qustion by id
  findOne(id: Number) {
    const url = `findOne/${id}`;
    let requestuser = new HttpRequest("GET", this.req + url);
    return this.http.request(requestuser);
  }

  //get Answer by qustions id
  allAnswersByQustionIid(id: Number){
    const url =`allAnswersByQustionIid/${id}`
    let requestuser = new HttpRequest("GET", this.req + url);
    return this.http.request(requestuser);
  }


}
