import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// tslint:disable-next-line:no-unused-expression
// value(arg0: any); : any; {
//   throw new Error('Method not implemented.');
// }

@Injectable()
export class GraduatesService {
  private url = 'http://localhost:8080/graduates';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  getStudent(id: number){
    return this.http.get(this.url + '/findstudent/' + id).toPromise().then(res => res.json());
  }
  getAll() {
    return this.http.get(this.url).toPromise().then(response => response.json());
  }

  getById(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.get(urlId).toPromise().then(response => response.json());
  }

  getName(name: string) {
    const urlName = `${this.url}/findname/?name=${name}`;
    return this.http.get(urlName).toPromise().then(response => response.json());
  }

  getNameExists(email: string) {
    const urlEmailExists = `${this.url}/findnameexists/?name=${email}`;
    return this.http.get(urlEmailExists).toPromise().then(response => response.json());
  }

  create(graduates) {
    return this.http.post(this.url, JSON.stringify(graduates), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  update(graduates) {
    return this.http.put(this.url, JSON.stringify(graduates), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  delete(id: number) {
    const urlId = `${this.url}/${id}`;
    return this.http.delete(urlId, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
