import { IContext } from "../common";
import { EnvironmentType } from "@microsoft/sp-core-library";

/*
  Interface for the data manager class
*/

export interface IDataManagerProps{

    Context: IContext;
    EnvironmentType: EnvironmentType;

}

export default IDataManagerProps;
