import IDataManagerProps from "./IDataManagerProps";
import IDataProvider from "./dataProvider/IDataProvider";
import { EnvironmentType } from "@microsoft/sp-core-library";
import MockDataProvider from "./dataProvider/MockDataProvider";
import SharePointDataProvider from "./dataProvider/SharePointDataProvider";
import IMappingFile from "./dataProvider/IMappingFile";

/*
    Class for managing the data aspect. This will allow connection to a variety of data providers to store the layout files.
    The data manager will also be responsible for governing the data operations between the various data sources

    Checkout/Check in
    Get File call to parse and output a IMappingFile.
    Error Handling
*/

// Load data and populate state

// Write updates back
class DataManager {

  private _dataProvider: IDataProvider;

  /**
   * Constructor for the Data Manager Class
   * @param props
   */
  public constructor(props: IDataManagerProps) {

      if(props.EnvironmentType == EnvironmentType.Local){
        this._dataProvider = new MockDataProvider();
      }else{
        this._dataProvider = new SharePointDataProvider();
      }

  }

  /**
   * Get layout file from the data source
   */
  public GetLayout() : IMappingFile {

    //TODO: Add error handling
    let mapping:IMappingFile = this._dataProvider.GetData();

    return mapping;
  }

  /**
   * Update layout file against the data source
   * @param mappingFile
   */
  public UpdateLayout(mappingFile:IMappingFile): void {

    //TODO: Add error handling
    this._dataProvider.WriteData(mappingFile);
  }


}

export default DataManager;
