var ckeditors = {};
var config = {
    fontFamily: {
        options: [
            'default', 'Arial', 'sans - serif', 'Courier New', 'Courier', 'monospace', 'Courier',
            '標楷體',
            '細明體',
            'Times New Roman'
        ],
        supportAllValues: true
    },
    alignment: {
        options: ['left', 'right', 'center']
    },
    toolbar: {
        items: ['heading', 'htmlEmbed', '|',
            'bold', 'italic', 'underline', 'highlight', 'link', 'alignment', 'bulletedList', 'numberedList', '|',
            'outdent', 'indent', '|',
            'imageUpload', 'blockQuote', 'insertTable', 'codeBlock', 'findAndReplace', '|',
            'fontBackgroundColor', 'fontColor', 'fontFamily', 'fontSize', '|',
            'horizontalLine', 'specialCharacters', 'undo', 'redo', 'sourceEditing'
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', 'linkImage', 'toggleImageCaption'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties', 'toggleTableCaption'
        ]
    },
    licenseKey: '',
}

window.createCKEditor = function (editorId) {
    ClassicEditor
        .create(document.querySelector('#' + editorId), config)
        .then(newEditor => {
            ckeditors[editorId] = newEditor;
        })
        .catch(error => {
            console.error(error);
        });
}
window.getDataFromEditor = function (editorId) {
    return ckeditors[editorId].getData();
}
