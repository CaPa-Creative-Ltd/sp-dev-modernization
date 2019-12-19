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
    this.props.onNavClick({Key: item.key, LayoutId: item})
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
