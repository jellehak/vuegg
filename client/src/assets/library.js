import basicElements from '@/assets/BasicElements'
import materialComponents from '@/assets/MaterialComponents'

// export default {
//   elements: basicElements,
//   mdComponents: materialComponents
// }

export default [
  { title: 'Basic', components: basicElements },
  { title: 'Server', components: require('./Server').default },
  { title: 'Vuetify', components: require('./Vuetify').default }
//   { title: 'Material Design', components: materialComponents }
]
