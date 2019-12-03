import IDataProvider from "./IDataProvider";
import IMappingFile, { IPageLayout } from "./IMappingFile";

/*
  Provider for storing and retrieving data in memory for development purposes
*/
class MockDataProvider implements IDataProvider{

  private _mappingFile: IMappingFile;

  // Constructor
  public constructor() {
    this.Setup();
  }

  // Setup the fake data
  public Setup(): void {
    // Does nothing
    this._mappingFile.Version = "9.9.9.9"; // Mock Version
    this._mappingFile.Filename = "FakeData.xml"; // Mock File

    let pageLayout: IPageLayout = {

      AlsoAppliesTo: "Another Sample",
      AssocatedContentType: "Sample Content Type",

      // Keep all to true to ensure the UI shows up.
      HasHeaderConfig: true,
      HasMetadataMappingConfig: true,
      HasWebPartMappingConfig: true,
      HasWebPartZonesConfig: true,
      IncludeVerticalColumn: true,

      FixedWebPartMappings: null,

      MetadataMappings: null,
      PageHeader: null,
      PageLayoutTemplate: null,
      WebPartMappings: null,
      WebPartZoneMappings: null
    };

    this._mappingFile.PageLayouts = [ pageLayout ];
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
}

export default MockDataProvider;
