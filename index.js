const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        let called = 0;
        api.addCategory({
            categoryId: 'em.webmidi.category',
            messageId: 'em.webmidi.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'em.webmidi.available',
            type: type.BlockType.REPORTER,
            messageId: 'em.webmidi.available',
            categoryId: 'em.webmidi.category',
            function: args => this.available()
        });
        api.addBlock({
            opcode: 'em.webmidi.hello',
            type: type.BlockType.REPORTER,
            messageId: 'em.webmidi.hello',
            categoryId: 'em.webmidi.category',
            function: () => this.test()
        });
        api.addBlock({
            opcode: 'em.webmidi.start',
            type: type.BlockType.REPORTER,
            messageId: 'em.webmidi.start',
            categoryId: 'em.webmidi.category',
            function: () => this.start()
        });
        api.addBlock({
            opcode: 'em.webmidi.execute',
            type: type.BlockType.HAT,
            messageId: 'em.webmidi.execute',
            categoryId: 'em.webmidi.category',
            function: () => {
                if (called == 1) {
                    console.log("yes")
                    return true;
                } else return false;
            }
        });
    }
    available() {
        if (navigator.requestMIDIAccess) return true; return false;
    }
    start() {
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(midiAccess => {
                console.log(midiAccess);
                return midiAccess;
            }, error => {
                return "error:" + midiAccess.code;
            });
        } else {
            return 'Web MIDI is not supported';
        }
    }
    test() {
           return "aa"}
}

module.exports = MyExtension;
