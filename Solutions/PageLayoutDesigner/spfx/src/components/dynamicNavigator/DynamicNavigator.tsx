import * as React from 'react';
import { Nav, INavLinkGroup, INavLink } from 'office-ui-fabric-react/lib/Nav';

import styles from './DynamicNavigator.module.scss';

import { IDynamicNavigatorProps } from './IDynamicNavigatorProps';
import { IDynamicNavigatorState } from './IDynamicNavigatorState';
import { IMappingFile } from '../../services/dataProvider/IMappingFile';
import { INavigationReference } from '../../common';


export class DynamicNavigator extends React.Component<IDynamicNavigatorProps, IDynamicNavigatorState> {

  private _generatedNavigation:INavLink; //TODO: Bad, make strongly typed.

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IDynamicNavigatorProps) {
    super(props);

    //initialise state
    this.state = {

    };

  }

  private _setupNavigation(NavReferences: INavigationReference[]):INavLink[]{

    let navLinks:INavLink[];

      this.props.NavigationReferences.forEach(navRef => {
        let nav:INavLink;
        nav = {
          name: navRef.LayoutTitle,
          url:'',
          expandAriaLabel: 'Expand ' + navRef.LayoutTitle,
          collapseAriaLabel: 'Collapse ' + navRef.LayoutTitle,
          links: [
            { name: 'Page Layout Configuration', url: '', key: 'PageLayoutConfig-' + navRef.LayoutTempId.toString() },
          ]
        };

        //TODO: Make names constants
        if(navRef.HasHeaderConfig){
          nav.links.push({
            name: 'Header',
            url: '',
            key: 'Header-' + navRef.LayoutTempId.toString()
          });
        }

        if(navRef.HasMetadataMappingConfig){
          nav.links.push({
            name: 'Metadata Mapping',
            url: '',
            key: 'MetadataMapping-' + navRef.LayoutTempId.toString()
          });
        }

        if(navRef.HasWebPartMappingConfig){
          nav.links.push({
            name: 'Web Part Mapping',
            url: '',
            key: 'WebPartMapping-' + navRef.LayoutTempId.toString()
          });
        }

        if(navRef.HasWebPartZonesConfig){
          nav.links.push({
            name: 'Web Part Zones',
            url: '',
            key: 'WebPartZones-' + navRef.LayoutTempId.toString()
          });
        }

        if(navRef.HasWebPartZonesConfig){
          nav.links.push({
            name: 'Fixed Web Part Mapping',
            url: '',
            key: 'FixedWebPartMapping-' + navRef.LayoutTempId.toString()
          });
        }
        navLinks.push(nav);
      });

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
  public render(): React.ReactElement<IDynamicNavigatorProps> {
    return (
      <div>
        <Nav
          onRenderGroupHeader={this._onRenderGroupHeader}
          ariaLabel="Page Layout Navigation with drop down groups"
          onLinkClick={this._onLinkClick}
          groups={[
            {
              name: 'Layout Navigation',
              links: this._setupNavigation(this.props.NavigationReferences)
            }
          ]}
        />
      </div>
    );
  }

}
