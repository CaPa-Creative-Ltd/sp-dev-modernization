import { SPHttpClient } from '@microsoft/sp-http';
import { PageContext, SPField } from '@microsoft/sp-page-context';
import { ListViewAccessor } from "@microsoft/sp-listview-extensibility";
import { EnvironmentType, Guid } from '@microsoft/sp-core-library';

/**
 * Customizer context interface.
 * Can be used in different types of customizers
 */
export interface IContext {
    SPHttpClient: SPHttpClient;
    PageContext: PageContext;
    ListView?: ListViewAccessor | null;
    EnvironmentType: EnvironmentType;
}

/**
 * Parent of all props interfaces that needs context
 */
export interface IProps {
    context: IContext;
}


export interface INavigationReference{
  HasHeaderConfig: boolean;
  HeaderNavLinkKey: string;

  HasMetadataMappingConfig: boolean;
  MetadataNavLinkKey: string;

  HasWebPartMappingConfig: boolean;
  WebPartMappingNavLinkKey: string;

  HasWebPartZonesConfig: boolean;
  WebPartZonesNavLinkKey: string;

  HasDesigner:boolean;
  DesignerNavLinkKey:string;

  HasFixedWebPartMapping:boolean;
  FixedWebPartNavLinkKey: string;

  LayoutTitle:string;
  LayoutId:string;
}
