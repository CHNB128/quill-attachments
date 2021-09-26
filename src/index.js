import Quill from 'quill'
import Attachment from './formats/attachment'
import Module from './module'

Quill.register({
  'formats/attachment': Attachment
});

export default Module
