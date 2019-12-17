import IMappingFile from "../services/dataProvider/IMappingFile";
import { Guid } from '@microsoft/sp-core-library';
import { INavigationReference } from "./Interfaces";
/**
 * Helper with general methods to simplify some routines
 */
export class MappingsUtility {


  /**
   * Checks to see of the mapping file contains the nodes
   * @param mappingFile
   */
  public static AnalyseNavigationNodesInMapping(mappingFile: IMappingFile):INavigationReference[]{

    let navigationReferences: INavigationReference[] = [];

    if(mappingFile !== null && mappingFile.PageLayouts !== null){

      mappingFile.PageLayouts.forEach(layout => {
        let navRef: INavigationReference = {
          HasHeaderConfig: (layout.Header !== null),
          HasMetadataMappingConfig: (layout.MetaDataMapping !== null),
          HasWebPartMappingConfig: (layout.WebPartMappings !== null),
          HasWebPartZonesConfig: (layout.WebPartZoneMappings !== null),
          HasDesigner: (layout.WebPartMappings !== null || layout.WebPartZoneMappings !== null),
          LayoutTitle: layout.Name,
          LayoutTempId: Guid.newGuid()
        };

        navigationReferences.push(navRef);
      });
    }


    return navigationReferences;

  }

}
