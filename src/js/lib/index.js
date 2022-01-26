import $ from 'jquery';
import { Flip } from 'number-flip'

window.Flip = Flip
window.$ = window.jQuery = $;
require('fancybox')($)
window.$.fancybox = $.fancybox