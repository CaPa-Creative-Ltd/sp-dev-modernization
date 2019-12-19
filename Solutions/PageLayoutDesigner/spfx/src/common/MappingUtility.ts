import IMappingFile from "../services/dataProvider/IMappingFile";
import { Guid } from '@microsoft/sp-core-library';
import { INavigationReference } from "./Interfaces";
/**
 * Helper with general methods to simplify some routines
 */
export class MappingsUtility {

  public static NAVSPLITOKEN:string = "#;";
  public static HEADER:string = "Header";
  public static METADATA:string = "MetaData";
  public static WEBPARTMAPPING: string = "WebPartMapping";
  public static WEBPARTZONES: string = "WebPartZones";
  public static FIXEDWEBPART: string = "FixedWebPart";
  public static DESIGNER:string = "Designer";

  /**
   *
   * @param key Extracts the name from the navlink key value
   */
  public static GetNameFromNavLinkKey(key: string):string{

    if(key.indexOf(this.NAVSPLITOKEN) > -1){
      return key.split(this.NAVSPLITOKEN)[0];
    }

    return "";
  }

/**
   *
   * @param key Extracts the name from the navlink key value
   */
  public static GetLayoutIdFromNavLinkKey(key: string):string{

    if(key.indexOf(this.NAVSPLITOKEN) > -1){
      return key.split(this.NAVSPLITOKEN)[1];
    }

    return "";
  }

  /**
   * Checks to see of the mapping file contains the nodes
   * @param mappingFile
   */
  public static AnalyseNavigationNodesInMapping(mappingFile: IMappingFile):INavigationReference[]{

    let navigationReferences: INavigationReference[] = [];

    if(mappingFile !== null && mappingFile.PageLayouts !== null){

      mappingFile.PageLayouts.forEach(layout => {

        let token:string = MappingsUtility.NAVSPLITOKEN;

        let navRef: INavigationReference = {
          HasHeaderConfig: (layout.Header !== null),
          HeaderNavLinkKey: this.HEADER + token + layout.LayoutId,

          HasMetadataMappingConfig: (layout.MetaDataMapping !== null),
          MetadataNavLinkKey: this.METADATA + token + layout.LayoutId,

          HasWebPartMappingConfig: (layout.WebPartMappings !== null),
          WebPartMappingNavLinkKey: this.WEBPARTMAPPING + token + layout.LayoutId,

          HasWebPartZonesConfig: (layout.WebPartZoneMappings !== null),
          WebPartZonesNavLinkKey: this.WEBPARTZONES + token + layout.LayoutId,

          HasFixedWebPartMapping: (layout.FixedWebPartMappings !== null),
          FixedWebPartNavLinkKey: this.FIXEDWEBPART + token + layout.LayoutId,

          HasDesigner: (layout.WebPartMappings !== null || layout.WebPartZoneMappings !== null),
          DesignerNavLinkKey: this.DESIGNER + token + layout.LayoutId,

          LayoutTitle: layout.Name,
          LayoutId: layout.LayoutId
        };

        navigationReferences.push(navRef);
      });
    }


    return navigationReferences;

  }

}
