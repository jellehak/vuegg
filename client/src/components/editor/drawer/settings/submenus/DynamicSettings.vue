<template>
<div>
  <menu-toggle menuHeader="Props">
    {{value}}
    {{value.props}}
    <!-- <dim-pos :height="h" :width="w" :top="t" :bottom="b" :left="l" :right="r"
      @change="({type, value}) => emitChanges(type, value)">
    </dim-pos> -->

<template v-for='field in value.props'>
  <div>{{field}}</div>
</template> 

  </menu-toggle>
  
</div>
</template>


<script>
import cloneDeep from 'clone-deep'
import WebSafeFonts from '@/assets/WebSafeFonts'

import MenuToggle from '@/components/editor/common/MenuToggle'
import Slider from './controls/Slider'
import IconSelect from './controls/IconSelect'
import ColorPicker from './controls/ColorPicker'
import StackOrder from './controls/StackOrder'
import TextAlign from './controls/TextAlign'
import FontStyle from './controls/FontStyle'
import DimPos from './controls/DimPos'

export default {
  components: { MenuToggle, Slider, IconSelect, ColorPicker, StackOrder, TextAlign, FontStyle, DimPos },
  props: {
    value: Object
  },
  data () {
    return {
      h: this.height,
      w: this.width,
      t: this.top,
      l: this.left,
      b: this.bottom,
      r: this.right,
      z: this.zIndex,
      txt: this.text,
      sty: cloneDeep(this.styles),
      att: cloneDeep(this.attrs),
      fonts: WebSafeFonts,
      borderSelected: ''
    }
  },
  watch: {
    'height' (val) { this.h = val.toString() },
    'width' (val) { this.w = val.toString() },
    'top' (val) { this.t = val.toString() },
    'left' (val) { this.l = val.toString() },
    'bottom' (val) { this.b = val.toString() },
    'right' (val) { this.r = val.toString() },
    'zIndex' (val) { this.z = val },
    'text' (val) { this.txt = val },
    'styles' (val) { this.sty = cloneDeep(val) },
    'attrs' (val) { this.att = cloneDeep(val) }
  },
  computed: {
    hideTextSettings () {
      return (typeof this.txt === 'undefined' || this.txt === null) &&
        (typeof this.att.value === 'undefined' || this.att.value === null)
    }
  },
  methods: {
    onStyleChanges (prop, value) {
      this.sty[prop] = value
      this.emitChanges('styles', this.sty)
    },

    onAttrsChanges (prop, value) {
      this.att[prop] = value
      this.emitChanges('attrs', this.att)
    },

    emitChanges (type, value) {
      this.$emit('propchange', {type, value})
    }
  }
}
</script>


<style scoped>
.menu{
  width: 100%;
  height: 100%;
  margin: 1px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
  .menu .text-item {
    margin: 0 20px 10px;
  }
</style>
