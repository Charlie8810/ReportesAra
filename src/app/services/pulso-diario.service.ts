import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PulsoDiarioService {

  private headers = new Headers({
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Token':'',
    'TokenExpiry':'900',
    'Access-Control-Expose-Headers':'Token,TokenExpiry'
  });
  private options = new RequestOptions({ headers: this.headers }); 
  private serviceUrlBase = 'http://localhost:8080/api/';
  constructor (private http: Http) {}

  getColocacionesBrutas(): Observable<any[]> {
    return this.http.get(this.serviceUrlBase + 'DirectorioDashboard', this.options)
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
