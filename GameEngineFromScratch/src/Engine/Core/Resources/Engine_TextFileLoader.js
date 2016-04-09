var TextFileLoader = (function () {
    function TextFileLoader() {
    }
    TextFileLoader.prototype.loadXmlFileType = function () {
    };
    TextFileLoader.prototype.loadTextFileType = function () {
    };
    TextFileLoader.prototype.loadResource = function (fileName, fileType, loadCallBack) {
        ResourceMap.asyncLoadRequested(fileName);
        var asset = null;
        if (fileType == FileTypes.XmlFileType) {
            asset = this.loadXmlFileType();
        }
        else if (fileType == FileTypes.TextFileType) {
            asset = this.loadTextFileType();
        }
        ResourceMap.asyncLoadCompleted(fileName, asset);
        if (loadCallBack != null) {
            loadCallBack();
        }
    };
    return TextFileLoader;
})();
//# sourceMappingURL=Engine_TextFileLoader.js.map