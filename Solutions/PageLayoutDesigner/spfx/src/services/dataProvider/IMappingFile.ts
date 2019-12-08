
/*
  Design Notes
    - Aim to keep the data source very similar to the schema of the XML file.
    - Reference this for the data source:
      https://github.com/SharePoint/sp-dev-modernization/blob/dev/Tools/SharePoint.Modernization/SharePointPnP.Modernization.Framework/Publishing/pagelayoutmapping.xsd

*/


/* ----------------------------------------
  Base Properties
------------------------------------------*/

// Stores the location of the web part
export interface IWebPartLocation{

  Row: number;
  Column: number;
  Order?: number;
}

// Base Web Part Property
export interface IBaseWebPart{

  Name: string;
  Description?: string;
}

/* ----------------------------------------
  Overall mapping file
------------------------------------------*/
export interface IMappingFile{

  Filename: string;
  PageLayouts: IPageLayout[];
  Version: string;
}

export default IMappingFile;

/* ----------------------------------------
  Page Layout mapping
------------------------------------------*/
export interface IPageLayout {

  // Layout Attributes
  AssocatedContentType?:string;
  AlsoAppliesTo?:string;
  PageLayoutTemplate:PageLayoutTemplate;
  PageHeader:PageHeader;
  IncludeVerticalColumn?: boolean;

  // Navigation
  HasHeaderConfig: boolean;
  HasMetadataMappingConfig: boolean;
  HasWebPartMappingConfig: boolean;
  HasWebPartZonesConfig: boolean;

  // Header Mapping
  Header: IHeaderMapping;

  // Metadata Mapping
  MetaDataMapping: IMetaDataMapping;

  // Web Part Mapping
  WebPartMappings?: IWebPartMapping[];

  // Web part Zones
  WebPartZoneMappings?: IWebPartZone[];

  // Fixed Web Part Mapping
  FixedWebPartMappings?: IFixedWebPartMapping[];
}

export enum PageLayoutTemplate{
  AutoDetect = "AutoDetect",
  OneColumn = "OneColumn",
  TwoColumns = "TwoColumns",
  TwoColumnsWithSidebarLeft = "TwoColumnsWithSidebarLeft",
  TwoColumnsWithSidebarRight = "TwoColumnsWithSidebarRight",
  TwoColumnsWithHeader = "TwoColumnsWithHeader",
  TwoColumnsWithHeaderAndFooter = "TwoColumnsWithHeaderAndFooter",
  ThreeColumns = "ThreeColumns",
  ThreeColumnsWithHeader = "ThreeColumnsWithHeader",
  ThreeColumnsWithHeaderAndFooter = "ThreeColumnsWithHeaderAndFooter"
}

export enum PageHeader {
  None = "None",
  Default = "Default",
  Custom = "Custom"
}

/* ----------------------------------------
  Header mapping
------------------------------------------*/
export interface IHeaderMapping{

  // Type
  Type: HeaderType;

  // Alignment
  Alignment: HeaderAlignment;

  // Show Published Date
  ShowPublishedDate: boolean;

  // Fields
  HeaderFields: IHeaderField[];

}

export interface IHeaderField{
  Name: string;
  HeaderProperty: HeaderProperty;
  Functions: string;
}

export enum HeaderType{
  FullWidthImage = "FullWidthImage",
  NoImage = "NoImage",
  ColorBlock = "ColorBlock",
  CutInShape = "CutInShape"
}

export enum HeaderAlignment{
  Left = "Left",
  Center = "Center"
}

export enum HeaderProperty{
  ImageServiceRelativeUrl = "ImageServiceRelativeUrl",
  TopicHeader = "TopicHeader",
  AlternativeText = "AlternativeText",
  Authors = "Authors"
}

/* ----------------------------------------
  Metadata mapping
------------------------------------------*/
export interface IMetaDataMapping {
  // Fields
  // [Name, Target Field Name, Functions, Show in Page Properties]
  MetaDataFields: IMetaDataField[];
  ShowPageProperties?: boolean;
}

export interface IMetaDataField{

  Name: string;
  TargetFieldName:string;
  Functions: string;
  ShowInPageProperties?:boolean;
}

/* ----------------------------------------
  Web Part Mapping
------------------------------------------*/
export interface IWebPartMapping extends IWebPartLocation,IBaseWebPart{
    TargetWebPart: string;
    Properties?: IWebPartProperty[];
}

export interface IWebPartProperty{
  Name: string;
  Type: WebPartPropertyType;
  Functions?: string;
}

export enum WebPartPropertyType{
  string = "string",
  bool = "bool",
  guid = "guid",
  integer = "integer",
  datetime = "datetime"
}

/* ----------------------------------------
  Web Part Zones
------------------------------------------*/
export interface IWebPartZone extends IWebPartLocation{

  // Zones
  // [Zone ID, Zone Index]
  ZoneIndex: number;
  ZoneId: string;
  WebPartZoneLayout?: IWebPartOccurance[];
}

export interface IWebPartOccurance extends IWebPartLocation{
  Type: string;
}

/* ----------------------------------------
  Fixed Web Part Mapping
------------------------------------------*/
export interface IFixedWebPartMapping extends IWebPartLocation,IBaseWebPart{

  // Fixed Web Part Mapping
  Type: string;
  FixedWebPartProperties?: IFixedWebPartProperty[];
}

// Single field for web part properties
export interface IFixedWebPartProperty{
  Name: string;
  Type: WebPartPropertyType;
  Value: string;
}


