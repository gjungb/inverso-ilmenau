import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'pi-color-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.scss',
})
export class ColorFormComponent {
  /**
   *
   */
  @Output()
  colorsChange = new EventEmitter<string>();

  /**
   *
   */
  form = new FormGroup({
    color: new FormControl('red', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
  });

  /**
   *
   */
  changes$ = this.form.valueChanges.pipe(debounceTime(500));

  /**
   *
   */
  changes = toSignal(this.changes$, {
    initialValue: {
      color: this.form.value.color,
    },
  });

  /**
   *
   */
  updateColor(): void {
    // effect
    this.colorsChange.emit(this.form.value.color);
  }
}
