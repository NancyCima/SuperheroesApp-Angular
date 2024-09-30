import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from '../../../enviroments/enviroment';
import { map, Observable } from 'rxjs';
import { User } from '../../superhero/interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // baserUrl: string = enviroments.baseUrl;
  private usersURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(map((users: User[]) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        return !!user;
      })
    );
  }
}
