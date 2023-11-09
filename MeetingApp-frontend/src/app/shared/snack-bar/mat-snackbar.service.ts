import { Injectable } from "@angular/core"
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class MatSnackBarService {

    constructor(private snackBar: MatSnackBar) { }

    openSnackBar(message: string): void {
        this.snackBar.open(message, 'OK', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
}
