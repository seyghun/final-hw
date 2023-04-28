import _ from 'lodash';
import { HW1 } from '../../HW-1/js/script';
import { HW2 } from '../../HW-2/js/script';
import { HW3 } from '../../HW-3/js/script';
import { HW4 } from '../../HW-4/js/script';
import { HW5 } from '../../HW-5/js/script';
import { HW6 } from '../../HW-6/js/script';
import { HW7 } from '../../HW-7/js/script';
import { HW8 } from '../../HW-8/js/script';
import { HW9 } from '../../HW-9/js/script';
import { HW11 } from '../../HW-11/js/script';
function component() {
    const element = document.createElement('div');

    let hw1 = HW1();
    let hw2 = HW2();
    let hw3 = HW3();
    let hw4 = HW4();
    let hw5 = HW5();
    let hw6 = HW6();
    let hw7 = HW7();
    let hw8 = HW8();
    let hw9 = HW9();
    let hw11 = HW11();

    element.innerHTML = _.join(hw1);
    element.innerHTML = _.join(hw2);
    element.innerHTML = _.join(hw3);
    element.innerHTML = _.join(hw4);
    element.innerHTML = _.join(hw5);
    element.innerHTML = _.join(hw6);
    element.innerHTML = _.join(hw7);
    element.innerHTML = _.join(hw8);
    element.innerHTML = _.join(hw9);
    element.innerHTML = _.join(hw11);
    return element;
}

document.body.appendChild(component());