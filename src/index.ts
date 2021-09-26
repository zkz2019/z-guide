import { EditDom } from './core/Element';
import './core/calculate';

const k = new EditDom({ a: 1 });
console.log('k', k);
k.log("nihao");
class Zguide {
    options = {};
    currentStep = 0;
    total = 0;
    constructor(options = {}) {
        this.options = {

            // animate: SHOULD_ANIMATE_OVERLAY, // Whether to animate or not
            // opacity: OVERLAY_OPACITY,    // Overlay opacity
            // padding: OVERLAY_PADDING,    // Spacing around the element from the overlay
            // scrollIntoViewOptions: null, // Options to be passed to `scrollIntoView`
            // allowClose: SHOULD_OUTSIDE_CLICK_CLOSE,      // Whether to close overlay on click outside the element
            // keyboardControl: ALLOW_KEYBOARD_CONTROL,     // Whether to allow controlling through keyboard or not
            // overlayClickNext: SHOULD_OUTSIDE_CLICK_NEXT, // Whether to move next on click outside the element
            // stageBackground: '#ffffff',       // Background color for the stage
            // onHighlightStarted: (): null => null,   // 
            // onHighlighted: (): null => null,        // 
            onClose: (): null => null,         // 销毁实例
            onReset: (): null => null,              // 
            onNext: (): null => null,               // 
            onPrevious: (): null => null,           // 
            ...options,
        }
    }
    init() {

    }
    getStep() { }
    toStep(step: number | string) { }
    nextStep() { }
    previousStep() { }
}