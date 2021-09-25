import Quill from 'quill';

const Link = Quill.import('formats/link');

export default class Attachment extends Link {

  static create(value) {
    const node = super.create(value);
    const { properties, id, render } = value
    node.setAttribute('id', id);
    node.setAttribute('href', null);
    return render(node, properties);
  }

}

Attachment.blotName  = 'attachment';
Attachment.tagName   = 'a';
