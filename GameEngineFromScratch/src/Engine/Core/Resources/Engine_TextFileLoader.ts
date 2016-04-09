class TextFileLoader implements FileLoader {
        
    private loadXmlFileType(): any {
            
    }
    
    private loadTextFileType(): any {

    }
    
     loadResource(
        fileName: string,
        fileType:number, loadCallBack:Function) {

         ResourceMap.asyncLoadRequested(fileName);
         var asset: any = null;
         if (fileType == FileTypes.XmlFileType) {
             asset= this.loadXmlFileType();
         }
         else if (fileType == FileTypes.TextFileType) {
             asset = this.loadTextFileType();
         }
         ResourceMap.asyncLoadCompleted(fileName, asset);
         if (loadCallBack != null) {
             loadCallBack();
         }
    }
   
}