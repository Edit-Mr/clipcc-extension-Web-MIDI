const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'em.webmidi.category',
            messageId: 'em.webmidi.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'em.webmidi.hello',
            type: type.BlockType.REPORTER,
            messageId: 'em.webmidi.hello',
            categoryId: 'em.webmidi.category',
            function: () => 'Hello, ClipCC!'
        });
    }
}

module.exports = MyExtension;
