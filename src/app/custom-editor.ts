import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import CustomDropdownPlugin from './custom-dropdown.plugin';

export default class CustomEditor extends ClassicEditorBase {}

// Налаштування за замовчуванням
CustomEditor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'customDropdown',
      '|',
      'undo',
      'redo',
    ],
  },
  language: 'en',
};
