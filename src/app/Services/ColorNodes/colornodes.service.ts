import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorNodes } from '../../Models/ColorNodes/color-nodes.model';

@Injectable({
  providedIn: 'root'
})
export class ColornodesService {
  private apiUrl = `${environment.apiUrl}/color`;

  constructor(private http : HttpClient) { }

  displayColorNodes(): Observable<ColorNodes[]>{
    return this.http.get<ColorNodes[]>(`${this.apiUrl}/display`);
  }
  storeDiagramsColorNodes(post: ColorNodes): Observable<ColorNodes>{
    return this.http.post<ColorNodes>(`${this.apiUrl}/store`, post);
  }
}
