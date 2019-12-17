import IDataProvider from "./IDataProvider";
import { IMappingFile, IPageLayout, PageHeader, IWebPartLocation, PageLayoutTemplate, IMetaDataField, WebPartPropertyType, HeaderType, HeaderAlignment, HeaderProperty } from "./IMappingFile";
import { IContext } from "../../common";

/*
  Provider for storing and retrieving data in memory for development purposes
*/
class MockDataProvider implements IDataProvider{

  private _mappingFile: IMappingFile;

  // Constructor
  public constructor() {
    this.Setup(null);
  }

  // Setup the fake data
  public Setup(context: IContext): void {

    // Does nothing
    this._mappingFile.Version = "9.9.9.9"; // Mock Version
    this._mappingFile.Filename = "Mock.xml"; // Mock File
    this._mappingFile.PageLayouts = [{

      Name: "MockLayout",

      AlsoAppliesTo: "Another Sample Layout",
      AssocatedContentType: "Sample Content Type",
      PageHeader: PageHeader.Default,
      PageLayoutTemplate: PageLayoutTemplate.AutoDetect,

      // These are used to determine if the navigation UI shows the section controls
      IncludeVerticalColumn: true,

      Header: {
        Type: HeaderType.ColorBlock, Alignment: HeaderAlignment.Left,  ShowPublishedDate: true,
        HeaderFields:[
          { Name: "PublishingRollupImage", HeaderProperty:HeaderProperty.ImageServiceRelativeUrl, Functions:"StaticString('https://contoso.sharepoint.com//SiteAssets/Images/christmas-banner.jpg')"},
          { Name: "ArticleByLine", HeaderProperty:HeaderProperty.TopicHeader, Functions:""},
          { Name: "PublishingContact", HeaderProperty:HeaderProperty.Authors, Functions:"ToAuthors({PublishingContact})"},
        ]
      },

      MetaDataMapping: {
        ShowPageProperties: true,
        MetaDataFields: [
         { Name: "Field A", TargetFieldName:"Target Field A", Functions: "" },
         { Name: "Field B", TargetFieldName:"Target Field B", Functions: "Empty()" }
        ]
      },

      WebPartMappings: [
        { Name: "PublishingPageImage", TargetWebPart: "SharePointPnP.Modernization.WikiImagePart", Row: 1, Column: 2,
          Properties: [
            { Name: "ImageUrl", Type: WebPartPropertyType.string, Functions:"ToImageUrl({PublishingPageImage})"},
            { Name: "AlternativeText", Type: WebPartPropertyType.string, Functions:"ToImageAltText({PublishingPageImage})"},
            { Name: "Anchor", Type: WebPartPropertyType.string, Functions:"ToImageAnchor({PublishingPageImage})"},
            { Name: "Caption", Type: WebPartPropertyType.string, Functions:"ToImageCaption({PublishingImageCaption})"},
          ]
        },
        { Name: "PublishingPageContent", TargetWebPart: "SharePointPnP.Modernization.WikiTextPart", Row: 1, Column: 2,
          Properties: [
            { Name: "Text", Type: WebPartPropertyType.string }
          ]
        },
      ],

      // Web part Zones
      WebPartZoneMappings: [
        { ZoneIndex:0, ZoneId:"x00001a", Row:1, Column:1 },
        { ZoneIndex:0, ZoneId:"x00002b", Row:1, Column:1 },
        { ZoneIndex:0, ZoneId:"x00003c", Row:1, Column:1 },
        { ZoneIndex:0, ZoneId:"x00004d", Row:1, Column:1 }
      ],

      FixedWebPartMappings: [
        {
            Name: "Image Web Part", Type: "Microsoft.SharePoint.WebPartPages.ImageWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c",
            Row: 1, Column: 1, Description: "Sample description",
            FixedWebPartProperties: [
              { Name: "runat", Type: WebPartPropertyType.string, Value:"server" },
              { Name: "imagelink", Type: WebPartPropertyType.string, Value:"/SiteCollectionImages/hero.jpg" },
              { Name: "alternativetext", Type: WebPartPropertyType.string, Value:"Drone flying in the air" },
              { Name: "verticalalignment", Type: WebPartPropertyType.string, Value:"Middle" },
          ]
        },
        {
          Name: "Content Editor Web Part", Type: "Microsoft.SharePoint.WebPartPages.ContentEditorWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c",
          Row: 1, Column: 1, Description: "Sample description",
          FixedWebPartProperties: [
            { Name: "TITLE", Type: WebPartPropertyType.string, Value:"Example Embedded Web Content Editor" },
            { Name: "FRAMETYPE", Type: WebPartPropertyType.string, Value:"None" },
            { Name: "PARTIMAGELARGE", Type: WebPartPropertyType.string, Value:"/_layouts/15/images/mscontl.gif" },
            { Name: "ID", Type: WebPartPropertyType.string, Value:"g_db666743_4c5b_4a21_a9cf_7a199ce19a60" },
          ]
        }
      ],
    }];

  }

  // Get the fake data
  public GetData(): IMappingFile {

    return this._mappingFile;
  }

  // Write the fake data
  public WriteData(file: IMappingFile): void {
    // Does nothing
    return;
  }

  public StartSession():void{
    return;
  }

  public EndSession():void{
    return;
  }
}

export default MockDataProvider;
