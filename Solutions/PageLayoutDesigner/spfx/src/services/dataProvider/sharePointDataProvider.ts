import IDataProvider from "./IDataProvider";
import IMappingFile from './IMappingFile';
import { IContext } from "../../common";
import { SPHttpClient } from '@microsoft/sp-http';

/*
 This class will be used to connect to SharePoint and save, retrieve the files.
 The framework to simplify the interaction will be PnPJs.
*/

class SharePointDataProvider implements IDataProvider{

  private _context:IContext;

  public Setup(context: IContext): void {
    this._context = context;
  }

  public GetData(): IMappingFile {
    throw new Error("Method not implemented.");
  }

  public WriteData(file: IMappingFile): void {
    throw new Error("Method not implemented.");
  }

  public StartSession():void{
    throw new Error("Method not implemented.");
  }

  public EndSession():void{
    throw new Error("Method not implemented.");
  }

  /**
   * Downloads document content from SP location.
   */
  public downloadSPFileContent = async (absoluteFileUrl: string, fileName: string): Promise<File> => {
    try {
      const fileDownloadResult = await this._context.spHttpClient.get(absoluteFileUrl, SPHttpClient.configurations.v1);

      if (!fileDownloadResult || !fileDownloadResult.ok) {
        throw new Error(`Something went wrong when downloading the file. Status='${fileDownloadResult.status}'`);
      }

      // Return file created from blob
      const blob : Blob = await fileDownloadResult.blob();
      return  new File([blob], fileName);
    } catch (err) {
      console.error(`[FileBrowserService.fetchFileContent] Err='${err.message}'`);
      return null;
    }
  }

}

export default SharePointDataProvider;
