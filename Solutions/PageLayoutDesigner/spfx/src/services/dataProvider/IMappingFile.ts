
/*
  Design Notes
    - Aim to keep the data source very similar to the schema of the XML file.
    - Reference this for the data source:
      https://github.com/SharePoint/sp-dev-modernization/blob/dev/Tools/SharePoint.Modernization/SharePointPnP.Modernization.Framework/Publishing/pagelayoutmapping.xsd

*/

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
  AssocatedContentType:string;
  AlsoAppliesTo:string;
  PageLayoutTemplate:PageLayoutTemplate;
  PageHeader:PageHeader;
  IncludeVerticalColumn: boolean;

  // Navigation
  HasHeaderConfig: boolean;
  HasMetadataMappingConfig: boolean;
  HasWebPartMappingConfig: boolean;
  HasWebPartZonesConfig: boolean;

  // Metadata Mapping
  MetadataMappings: IWebPartMapping[];

  // Web Part Mapping
  WebPartMappings: IWebPartMapping[];

  // Web part Zones
  WebPartZoneMappings: IWebPartZone[];

  // Fixed Web Part Mapping
  FixedWebPartMappings: IFixedWebPartMapping[];
}

enum PageLayoutTemplate{
  AutoDetect,
  OneColumn,
  TwoColumns,
  TwoColumnsWithSidebarLeft,
  TwoColumnsWithSidebarRight,
  TwoColumnsWithHeader,
  TwoColumnsWithHeaderAndFooter,
  ThreeColumns,
  ThreeColumnsWithHeader,
  ThreeColumnsWithHeaderAndFooter
}

enum PageHeader{
  None,
  Default,
  Custom
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
  HeaderFields: HeaderField[];

}

export interface HeaderField{
  Name: string;
  HeaderProperty: HeaderProperty;
  Functions: string;
}

enum HeaderType{
  FullWidthImage,
  NoImage,
  ColorBlock,
  CutInShape
}

enum HeaderAlignment{
  Left,
  Center
}

enum HeaderProperty{
  ImageServiceRelativeUrl,
  TopicHeader,
  AlternativeText,
  Authors
}

/* ----------------------------------------
  Metadata mapping
------------------------------------------*/
export interface IMetaDataMapping extends IBaseWebPart {
  // Fields
  // [Name, Target Field Name, Functions, Show in Page Properties]
  ShowPageProperties: boolean;
  MetaDataFields:MetadataField[];
}

export interface MetadataField{

  Name: string;
  TargetFieldName:string;
  Functions: string;
  ShowInPageProperties:boolean;
}

/* ----------------------------------------
  Web Part Mapping
------------------------------------------*/
export interface IWebPartMapping extends IWebPartLocation{

    // Web Parts
    WebParts: IWebPart[];
}

export interface IWebPart extends IBaseWebPart{
    Name: string;
    TargetWebPart: string;
    FieldId: string;
}

export interface WebPartProperty{
  Name: string;
  Type: WebPartPropertyType;
  Functions: string;
}

enum WebPartPropertyType{
  string,
  bool,
  guid,
  integer,
  datetime
}

/* ----------------------------------------
  Web Part Zones
------------------------------------------*/
export interface IWebPartZone extends IWebPartLocation{

  // Zones
  // [Zone ID, Zone Index]
  ZoneIndex: number;
  ZoneId: string;
  WebPartZoneLayout: WebPartOccurance[];
}

export interface WebPartOccurance extends IWebPartLocation{

  Type: string;
}

/* ----------------------------------------
  Fixed Web Part Mapping
------------------------------------------*/
export interface IFixedWebPartMapping extends IWebPartLocation,IBaseWebPart{

  // Fixed Web Part Mapping
  Type: string;
  FixedWebPartProperties: FixedWebPartProperty[];
}

// Single field for web part properties
export interface FixedWebPartProperty{
  Name: string;
  Type: WebPartPropertyType;
  Value: string;
}


/* ----------------------------------------
  Base Properties
------------------------------------------*/

// Stores the location of the web part
export interface IWebPartLocation{

    Row: number;
    Column: number;
    Order: number;
}

// Base Web Part Property
export interface IBaseWebPart{
  Name: string;
  Description: string;
}
