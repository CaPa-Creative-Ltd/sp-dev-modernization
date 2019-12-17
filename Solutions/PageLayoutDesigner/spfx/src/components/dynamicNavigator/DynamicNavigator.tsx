import * as React from 'react';
import { Nav, INavLinkGroup, INavLink } from 'office-ui-fabric-react/lib/Nav';

import styles from './DynamicNavigator.module.scss';

import { IDynamicNavigatorProps } from './IDynamicNavigatorProps';
import { IDynamicNavigatorState } from './IDynamicNavigatorState';
import { IMappingFile } from '../../services/dataProvider/IMappingFile';
import { INavigationReference } from '../../common';


export class DynamicNavigator extends React.Component<IDynamicNavigatorProps, IDynamicNavigatorState> {

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

  private _setup(NavReferences: INavigationReference[]):void{


  }

  private _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
    return <h3>{group.name}</h3>;
  }

  private _onLinkClick(ev?: React.MouseEvent<HTMLElement, MouseEvent>, item?: INavLink): void{

    // The item objecct is the same properties as the selected link e.g. item.name or item.key if in an array
    // alert(item.key);
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
              links: [
                {
                  name: 'Sample Page Layout',
                  url: '',
                  expandAriaLabel: 'Expand Parent Sample Page Layout',
                  collapseAriaLabel: 'Collapse Parent Sample Page Layout',
                  links: [
                    { name: 'Page Layout Configuration', url: '', key: 'key1' },
                    { name: 'Header', url: '', key: 'key2' },
                    { name: 'Metadata Mapping', url: '', key: 'key3' },
                    { name: 'Web Part Mapping', url: '', key: 'key4' },
                    { name: 'Web Part Zones', url: '', key: 'key5' },
                    { name: 'Fixed Web Part Mapping', url: '', key: 'key6' },
                    { name: 'Designer', url: '', key: 'key7' }
                  ]
                }
              ]
            }
          ]}
        />
      </div>
    );
  }

}
