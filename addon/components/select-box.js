import Component from '@ember/component';

export default Component.extend({

  classNames: ['custom-select-container'],

  actions: {
    displayOptions() {
      let nowElement = document.getElementById(this.elementId);
      let options = nowElement.firstChild.childNodes[3];
      let display = options.style.display;
      this.changeIcon();
      if (display === 'none') {
        // open the options
        options.style.display = 'block';
      } else if (display === 'block') {
        // close the options
        options.style.display = 'none';
      } else {
        // open the options
        options.style.display = 'block';
      };
    },
    closeOptions() {
      let nowElement = document.getElementById(this.get('elementId'));
      let options = nowElement.firstChild.childNodes[3];
      this.changeIcon();
      options.style.display = 'none';
    },
    selectOption(value) {
      if (value != '') {
        this.set('select.selected', true);
        this.set('select.optionSelected', value);
        this.fatherFunction(value);
      }
    },
    deleteSelected() {
      this.set('select.selected', false);
      this.set('select.optionSelected', '');
    }
  },
  
  changeIcon() {
    let nowElement = document.getElementById(this.get('elementId'));
    let iconElement = nowElement.firstChild.childNodes[1].childNodes[1].childNodes[3];
    if (iconElement.innerHTML == '▼') {
      iconElement.innerHTML = '▲';
    }else {
      iconElement.innerHTML = '▼';
    }
  }
});