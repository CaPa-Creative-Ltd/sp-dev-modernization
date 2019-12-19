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

        let layoutTempId: string = Guid.newGuid().toString();

        let navRef: INavigationReference = {
          HasHeaderConfig: (layout.Header !== null),
          HeaderNavLinkKey: "Header#;" + layoutTempId,

          HasMetadataMappingConfig: (layout.MetaDataMapping !== null),
          MetadataNavLinkKey: "MetaData#;" + layoutTempId,

          HasWebPartMappingConfig: (layout.WebPartMappings !== null),
          WebPartMappingNavLinkKey: "WebPartMapping#;" + layoutTempId,

          HasWebPartZonesConfig: (layout.WebPartZoneMappings !== null),
          WebPartZonesNavLinkKey: "WebPartZones#;" + layoutTempId,

          HasFixedWebPartMapping: (layout.FixedWebPartMappings !== null),
          FixedWebPartNavLinkKey: "FixedWebPart#;" + layoutTempId,

          HasDesigner: (layout.WebPartMappings !== null || layout.WebPartZoneMappings !== null),
          DesignerNavLinkKey: "Designer#;" + layoutTempId,

          LayoutTitle: layout.Name,
          LayoutId: layoutTempId
        };

        navigationReferences.push(navRef);
      });
    }


    return navigationReferences;

  }

}
