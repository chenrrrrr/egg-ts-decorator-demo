// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDemo from '../../../app/controller/demo';

declare module 'egg' {
  interface IController {
    demo: ExportDemo;
  }
}
