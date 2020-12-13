'use strict';


import{removeTransition} from '../handlers/removeTransition.js' ;


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));