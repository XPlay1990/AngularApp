import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class GitVersion {
    constructor(public version: string) { }
}

@Injectable({
    providedIn: 'root'
})
export class VersionService {


    constructor(private httpClient: HttpClient) { }

    executeGetGitVersion() {
        return this.httpClient.get<GitVersion>(`${API_URL}/version`);
    }
}