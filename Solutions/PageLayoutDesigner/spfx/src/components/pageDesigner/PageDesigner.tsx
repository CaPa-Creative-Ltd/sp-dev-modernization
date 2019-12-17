import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { DynamicNavigator } from '../dynamicNavigator';
import { FixedWebPartMappingEditor } from '../fixedWebPartMappingEditor';
import { HeaderConfigEditor } from '../headerConfigEditor';
import { MetadataMappingEditor } from '../metadataMappingEditor';
import { VisualDesigner } from '../visualDesigner';
import { PageLayoutConfigEditor } from '../pageLayoutConfigEditor';
import { WebPartMappingEditor } from '../webPartMappingEditor';
import { WebPartZoneMappingEditor } from '../webPartZoneMappingEditor';
import DataManager from '../../services/DataManager';
import IDataManagerProps from '../../services/IDataManagerProps';
import IMappingFile from '../../services/dataProvider/IMappingFile';
import { MappingsUtility } from '../../common/MappingUtility';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
  Majority of the processing will occur here
*/

export class PageDesigner extends React.Component<IPageDesignerProps, {}> {

  private _mappings: IMappingFile;

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerProps) {
    super(props);

    //TODO: Check to see if this is the best initialisation location
    this.LoadMappings();
  }


  /**
   *  Loads the mapping content
   */
  private LoadMappings():void{

    let dataManagerOptions: IDataManagerProps = {
      Context: this.props.Context
    };

    let dataManager: DataManager = new DataManager(dataManagerOptions);
    this._mappings = dataManager.GetMappingFile();
  }



  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IPageDesignerProps> {
    //TODO: Look at navigation or router components
    return (
      <div className={styles.pageDesigner}>
        <div className={styles.row}>
          <div className={styles.nav}>
            <DynamicNavigator NavigationReferences= { MappingsUtility.AnalyseNavigationNodesInMapping(this._mappings) }  />
          </div>
          <div className={styles.editorContainer}>
            Editor Container

            <HeaderConfigEditor />
            <MetadataMappingEditor />
            <FixedWebPartMappingEditor />
            <VisualDesigner />
            <PageLayoutConfigEditor />
            <WebPartMappingEditor />
            <WebPartZoneMappingEditor />
          </div>
        </div>
      </div>
    );
  }
}
