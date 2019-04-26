/*
  Basic elements (HTML5 Elements):
  - PARENT -> egglement, [containegg]
 */
export default [
  // DIV
  {
    'name': 'Card',
    'iconName': 'mdcDrawer',
    'type': 'card',
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
  },

  // BUTTON
  {
    'name': 'button',
    'type': 'button',
    'text': 'Button',
    'egglement': true,
    'width': 200,
    'height': 40,
    'attrs': {},
    'styles': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    },
    'classes': {}
  }

]
