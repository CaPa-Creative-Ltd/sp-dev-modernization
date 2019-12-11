import IDataManagerProps from "./IDataManagerProps";
import IDataProvider from "./dataProvider/IDataProvider";
import { EnvironmentType } from "@microsoft/sp-core-library";
import MockDataProvider from "./dataProvider/MockDataProvider";
import SharePointDataProvider from "./dataProvider/SharePointDataProvider";

/*
    Class for managing the data aspect. This will allow connection to a variety of data providers to store the layout files.
    The data manager will also be responsible for governing the data operations between the various data sources
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



}

export default DataManager;
