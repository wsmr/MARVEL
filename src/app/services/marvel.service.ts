import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';
import { MarvelBaseResponse } from '../models/marvel-base-response';
import { Character } from '../models/character';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

    private publicKey =  environment.publickey;
    private privateKey = environment.privetkey;
    private actionUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) {}

    private getHash(timeStamp: string): string {
        const hashGenerator: Md5 = new Md5();
        hashGenerator.appendStr(timeStamp);
        hashGenerator.appendStr(this.privateKey);
        hashGenerator.appendStr(this.publicKey);
        const hash: string = hashGenerator.end().toString();
        return hash;
    }
    private getTimeStamp(): string {
        return new Date().valueOf().toString();
    }
    public getAllCharacters(): Observable<MarvelBaseResponse<Character>> {
        const timeStamp = this.getTimeStamp();
        const hash = this.getHash(timeStamp);
        const params = new HttpParams().set('limit', '10').set('ts', timeStamp).set('apikey', this.publicKey).set('hash', hash);
        return this.httpClient.get<MarvelBaseResponse<Character>>(this.actionUrl, { params});
    }

    public getSingleCharacters(id: number): Observable<MarvelBaseResponse<Character>> {
      const timeStamp = this.getTimeStamp();
      const hash = this.getHash(timeStamp);
      const params = new HttpParams().set('ts', timeStamp).set('apikey', this.publicKey).set('hash', hash);
      return this.httpClient.get<MarvelBaseResponse<Character>>(this.actionUrl + '/' + id, { params});
    }
}
