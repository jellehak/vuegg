/*
  Basic elements (HTML5 Elements):
  - PARENT -> egglement, [containegg]
 */
export default [
  // // DIV
  // {
  //   'name': 'Card',
  //   'iconName': 'mdcDrawer',
  //   'type': 'card',
  //   'egglement': true,
  //   'containegg': true,
  //   'width': 300,
  //   'height': 300,
  //   'attrs': {
  //     'hidden': false
  //   },
  //   'classes': {},
  //   'styles': {
  //     'overflow': 'hidden',
  //     'border-color': 'rgba(0, 0, 0, 0.15)',
  //     'border-style': 'solid',
  //     'border-width': '1px'
  //   },
  //   'children': []
  // },

  // BUTTON
  {
    'name': 'button',
    'type': 'v-btn',
    'text': 'Button',
    'egglement': true,
    'width': 200,
    'height': 40,
    'styles': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    },
    props: {
      activeClass: {
        type: String,
        default: 'v-btn--active'
      },
      block: Boolean,
      depressed: Boolean,
      fab: Boolean,
      flat: Boolean,
      icon: Boolean,
      large: Boolean,
      loading: Boolean,
      outline: Boolean,
      ripple: {
        type: [Boolean, Object],
        default: null
      },
      round: Boolean,
      small: Boolean,
      tag: {
        type: String,
        default: 'button'
      }
      // type: {
      //   type: String,
      //   default: 'button'
      // }
    },
    'classes': {}
  },

  // BUTTON
  {
    'name': 'v-text-field',
    'type': 'v-text-field',
    'text': 'Button',
    'egglement': true,
    'width': 200,
    'height': 40,
    'attrs': {
      appendOuterIcon: String,
      /** @deprecated */
      appendOuterIconCb: Function,
      autofocus: Boolean,
      box: Boolean,
      browserAutocomplete: String,
      clearable: Boolean,
      clearIcon: {
        type: String,
        default: '$vuetify.icons.clear'
      },
      clearIconCb: Function,
      color: {
        type: String,
        default: 'primary'
      },
      counter: [Boolean, Number, String],
      flat: Boolean,
      fullWidth: Boolean,
      label: { type: String, default: 'Label' },
      outline: Boolean,
      placeholder: String,
      prefix: String,
      prependInnerIcon: String,
      /** @deprecated */
      prependInnerIconCb: Function,
      reverse: Boolean,
      singleLine: Boolean,
      solo: Boolean,
      soloInverted: Boolean,
      suffix: String
      // type: {
      //   type: String,
      //   default: 'text'
      // }
    },
    'styles': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    },
    'classes': {}
  },

  {
    'name': 'v-card',
    'iconName': 'div',
    'type': 'v-card',
    'egglement': true,
    'containegg': true,
    'width': 300,
    'height': 300,
    'attrs': {
      'hidden': false
    },
    'classes': {},
    'styles': {
      'overflow': 'hidden',
      'border-color': 'rgba(0, 0, 0, 0.15)',
      'border-style': 'solid',
      'border-width': '1px'
    },
    'children': []
  }
]
