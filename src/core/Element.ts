export interface HelloProps {
    compiler: string;
    framework: string;
}

export function setAttr(dom: Element, key: string, value: string) {
    const attr: Attr = document.createAttribute(key);
    attr.value = value;
    dom.setAttributeNode(attr);
}
export class EditDom {
    constructor(options: object) {
        console.log('options', options);
    }

    a: 'aaa';

    log(text: string) {
        console.log("text", text);
    }
}

export class AddDom {
    
}
const el = document.createElement('div');

console.log('el', el);
