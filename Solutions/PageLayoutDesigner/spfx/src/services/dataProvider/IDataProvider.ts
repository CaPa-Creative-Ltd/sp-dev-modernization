import IMappingFile from "./IMappingFile";
import { IContext } from "../../common";

/*
  Interface for data providers

*/
export interface IDataProvider {

  // Setup
  Setup(context: IContext) : void;

  StartSession(): void;

  // Read data from data source
  GetData() : IMappingFile;

  // Write data to data source
  WriteData(file: IMappingFile): void;

  EndSession():void;

}

export default IDataProvider;
