import { Component } from '@angular/core';
import { NodeAdd } from '../../components/node-add/node-add';

@Component({
  selector: 'app-home',
  imports: [NodeAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
