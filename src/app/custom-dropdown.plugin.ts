import { Plugin } from '@ckeditor/ckeditor5-core';
import { createDropdown } from '@ckeditor/ckeditor5-ui';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CustomDropdownPlugin extends Plugin {
  static get pluginName() {
    return 'CustomDropdown';
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('customDropdown', (locale) => {
      const dropdownView = createDropdown(locale);

      dropdownView.buttonView.set({
        label: 'Custom Dropdown',
        withText: true,
        tooltip: true,
      });

      // Додаємо елементи вручну
      const option1Button = new ButtonView(locale);
      option1Button.set({
        label: 'Option 1',
        withText: true,
      });
      option1Button.on('execute', () => {
        console.log('Option 1 selected');
      });

      const option2Button = new ButtonView(locale);
      option2Button.set({
        label: 'Option 2',
        withText: true,
      });
      option2Button.on('execute', () => {
        console.log('Option 2 selected');
      });

      // Додаємо кнопки до панелі дропдауна
      dropdownView.panelView.children.add(option1Button);
      dropdownView.panelView.children.add(option2Button);

      return dropdownView;
    });
  }
}
