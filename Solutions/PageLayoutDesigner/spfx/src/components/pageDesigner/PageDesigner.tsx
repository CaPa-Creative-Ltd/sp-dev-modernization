import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { DynamicNavigator, INavLinkClicked } from '../dynamicNavigator';
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
import { INavigationReference } from '../../common';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
  Majority of the processing will occur here
*/

export class PageDesigner extends React.Component<IPageDesignerProps, {}> {

  private _mappings: IMappingFile;
  private _navigationReferences: INavigationReference[];

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerProps) {
    super(props);

    //TODO: Check to see if this is the best initialisation location
    this._loadMappings();
    this._navLinkClicked = this._navLinkClicked.bind(this);
  }


  /**
   *  Loads the mapping content
   */
  private _loadMappings():void{

    let dataManagerOptions: IDataManagerProps = {
      Context: this.props.Context
    };

    let dataManager: DataManager = new DataManager(dataManagerOptions);
    this._mappings = dataManager.GetMappingFile();
    this._navigationReferences = MappingsUtility.AnalyseNavigationNodesInMapping(this._mappings);
  }

  /**
   *  Action to take when the navigation link is clicked
   */
  private _navLinkClicked(navLinkClicked: INavLinkClicked){

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
            <DynamicNavigator NavigationReferences= { this._navigationReferences } onNavClick={ this._navLinkClicked } />
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
