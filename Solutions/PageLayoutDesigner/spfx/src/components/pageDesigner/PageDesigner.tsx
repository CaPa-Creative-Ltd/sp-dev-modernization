import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
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
import { Nav, INavLink, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

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

  private _setupNavigation(navReferences: INavigationReference[]):INavLink[]{

    let navLinks:INavLink[] = [];

    if(navReferences !== null){
      navReferences.forEach(navRef => {
        let nav:INavLink;
        nav = {
          name: navRef.LayoutTitle,
          url:'',
          expandAriaLabel: 'Expand ' + navRef.LayoutTitle,
          collapseAriaLabel: 'Collapse ' + navRef.LayoutTitle,
          links: [
            { name: 'Page Layout Configuration', url: '', key: 'PageLayoutConfig-' + navRef.LayoutId.toString() },
          ]
        };

        //TODO: This could be improved perhaps move to calling code. Refine later.
        if(navRef.HasHeaderConfig){
          nav.links.push({ name: 'Header', url: '', key: navRef.HeaderNavLinkKey });
        }

        if(navRef.HasMetadataMappingConfig){
          nav.links.push({ name: 'Metadata Mapping', url: '', key: navRef.MetadataNavLinkKey });
        }

        if(navRef.HasWebPartMappingConfig){
          nav.links.push({ name: 'Web Part Mapping', url: '', key: navRef.WebPartMappingNavLinkKey });
        }

        if(navRef.HasWebPartZonesConfig){
          nav.links.push({ name: 'Web Part Zones', url: '', key: navRef.WebPartZonesNavLinkKey });
        }

        if(navRef.HasFixedWebPartMapping){
          nav.links.push({ name: 'Fixed Web Part Mapping', url: '', key: navRef.FixedWebPartNavLinkKey });
        }
        navLinks.push(nav);
      });
    }

    return navLinks;
  }

  private _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
    return <h3>{group.name}</h3>;
  }

  private _onLinkClick(ev?: React.MouseEvent<HTMLElement, MouseEvent>, item?: INavLink): void{

    // The item objecct is the same properties as the selected link e.g. item.name or item.key if in an array
    // This needs to bubble up to parent control that a navigation link has been clicked.
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
            <Nav
              onRenderGroupHeader={this._onRenderGroupHeader}
              ariaLabel="Page Layout Navigation with drop down groups"
              onLinkClick={this._onLinkClick}
              groups={[
                {
                  name: 'Layout Navigation',
                  links: this._setupNavigation(this._navigationReferences)
                }
              ]}
          />
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
