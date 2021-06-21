import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs/Subject';

import { map } from 'rxjs/operators';

import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {
    private characters = [
        { name: 'Luke Skywalker', side: '' },
        { name: 'Darth Vader', side: '' }
    ];

    charactersChanged = new Subject<void>();

    constructor(private logService: LogService, private http: HttpClient) {

    }

    fetchCharacters() {
        this.http.get('http://swapi.dev/api/people/').pipe(
            map((data: any) => {
                const extractedChars = data.results;   //<-------------------------Here
                const chars = extractedChars.map((char) => {
                    return { name: char.name, side: '' };
                });
                return chars
            })
        )
            .subscribe(
                (data) => {
                    console.log(data);
                    this.characters = data;
                    this.charactersChanged.next();
                }
            );
    }


    getCharacters(chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter((char) => {
            return char.side === chosenList;
        })
    }

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex((char) => {
            return char.name === charInfo.name;
        })
        this.characters[pos].side = charInfo.side;
        this.charactersChanged.next();
        this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
    }

    addCharacter(name, side) {
        const pos = this.characters.findIndex((char) => {
            return char.name === name;
        })
        if (pos !== -1) {
            return;
        }
        const newChar = { name: name, side: side };
        this.characters.push(newChar);
    }
}
