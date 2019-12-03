import IMappingFile from "./IMappingFile";

/*
  Interface for data providers

*/
export interface IDataProvider {

  // Setup
  Setup() : void;

  // Read data from data source
  GetData() : IMappingFile;

  // Write data to data source
  WriteData(file: IMappingFile): void;

}

export default IDataProvider;
