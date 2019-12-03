import IDataProvider from "./IDataProvider";
import IMappingFile from './IMappingFile';

/*
 This class will be used to connect to SharePoint and save, retrieve the files.
 The framework to simplify the interaction will be PnPJs.
*/

class SharePointDataProvider implements IDataProvider{

  public Setup(): void {
    throw new Error("Method not implemented.");
  }

  public GetData(): IMappingFile {
    throw new Error("Method not implemented.");
  }

  public WriteData(file: IMappingFile): void {
    throw new Error("Method not implemented.");
  }

}

export default SharePointDataProvider;
