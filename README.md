# ember-cli-select-box

> A select box addon for ember-cli.

## Demo

[Link](http://)

## Installation

```
ember install ember-cli-select-box
```


## Usage

### 1. It's better using this addon in a component rather than in a route.

This select-box addon only have one select box input, so if you have more than one select input in your form, you should use a compone to contain multiple select boxes.

### 2. host component -- `.hbs` file

```hbs
{{#custom-select select=selectOne externalFunction=(action "logSelectedValue")}}{{/custom-select}} 
{{#custom-select select=selectTwo externalFunction=(action "logSelectedValue")}}{{/custom-select}} 
```

### 3. host component -- `.js` file

```js
import Component from '@ember/component';
export default Component.extend({
  selectOne: {
    placeholder: 'select a dd', //the placeholder will be showed in the select box input
    optionSelected: '', // the default value, if do not have a default value, just let it ''.
    selected: false,    // the status if selected. Notice: if you have a default value, you must set the 'selected' true.
    options: [  // the select box's options
      'option one',
      'option two',
      'option three',
      'option four',
    ],
  },
  // when you have multiple select box, you must define multiple object select like below `selectOne` and `selectTwo`. And do not forget passing the value in the `hbs` file.
  selectTwo: {
    placeholder: 'select a dd',
    optionSelected: '',
    selected: false,
    options: [
      'option one',
      'option two',
      'option three',
      'option four',
    ],
  },
  actions: {
      logSelectedValue(value) {
        // this value is the value selected
        console.log('test', value);
      },
  }
});
```

## Features 

- drop-down-box
- clear
- icon change


# License

This project is licensed under the [MIT License](LICENSE.md).

