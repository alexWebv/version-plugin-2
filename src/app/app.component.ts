import { Component } from '@angular/core';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Editor: any = ClassicEditor;
  public editorConfig: any = {
    plugins: [ Essentials, Paragraph, Bold, Italic ],
    toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
    licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzQ0Nzk5OTksImp0aSI6IjAyMDBjNGVhLWNmODUtNDdkYi05N2VhLTFhMWM1MmM3YjJhZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjRlZDQxMzdlIn0.KktDqjYs0Rd_C-N03UzUfTGhj170XVy6G4RnVrAyOCzPmUAS6SaaHmG2kVUQ-Q2GuuenTsgn3CZDkQ14vln2RA', // Вставте ваш ключ
  };

  // constructor() {
  //   (ClassicEditor as any).builtinPlugins.push(this.addCustomButton);
  // }
  //
  private addCustomButton(editor: any): void {
    editor.ui.componentFactory.add('customButton', (locale: any) => {
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: 'Custom Button',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V7z" clip-rule="evenodd"/></svg>',
        tooltip: true
      });

      buttonView.on('execute', () => {
        console.log('Custom Button clicked!');
        alert('Custom Button was clicked!');
      });

      return buttonView;
    });
  }
}
