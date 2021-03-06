//https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
//https://github.com/jimmywarting/StreamSaver.js
//https://web.dev/file-system-access/
//https://wicg.github.io/file-system-access/
//https://github.com/bronzwikgk/text-editor/blob/main/src/inline-scripts/fs-helpers.js
/**
 * Create a handle to a new (text) file on the local file system.
 *
 * @return {!Promise<FileSystemFileHandle>} Handle to the new file.
 */
// Some in-memory attributes of the new File objects that will be constructed.
var fileData = {
    'sample.xml': {
        data: '<test>Hello!</test>',
        type: 'application/xml'
    },
    'sample.csv': {
        data: 'Test1,Test2\nHello1,Hello2',
        type: 'text/csv'
    },
    'sample.json': {
        data: JSON.stringify({ test: 'Hello!' }),
        type: 'application/json'
    }
}

class processFiles{
    static verifyPermissions() {
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            console.log("Great success! All the File APIs are supported.");
            return true; // 
        } else {
            alert('The File APIs are not fully supported in this browser.');
            return false; // 
        }
}
    static newfile(){
        var file = new File(["foo"], "foo.txt", {
            type: "text/plain",
        });
        var file = new File([fileData[name].data], name, { type: fileData[name].type, lastModified: Date.now() });
        // See http://docs.webplatform.org/wiki/apis/file/URL/createObjectURL
        var url = URL.createObjectURL(file, { oneTimeOnly: true });
}
    static saveNewFileHandle() {
    // For Chrome 86 and later...
    if ('showSaveFilePicker' in window) {
        const opts = {
            types: [{
                description: 'Text file',
                accept: { 'text/plain': ['.txt'] },
            }],
        };
        return window.showSaveFilePicker(opts);
    }
    // For Chrome 85 and earlier...
    const opts = {
        type: 'save-file',
        accepts: [{
            description: 'Text file',
            extensions: ['txt'],
            mimeTypes: ['text/plain'],
        }],
    };
    return window.chooseFileSystemEntries(opts);
    }
    static getFileHandle() {
        const opts = {
            types: [
                {
                    description: 'Text Files',
                    accept: {
                        'text/plain': ['.txt', '.text'],
                        'text/html': ['.html', '.htm']
                    }
                }
            ]
        };
        return window.showOpenFilePicker(opts);
    }



}
