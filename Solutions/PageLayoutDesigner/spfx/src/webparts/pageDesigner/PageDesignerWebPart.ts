import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, EnvironmentType, Environment } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";

import * as strings from 'PageDesignerWebPartStrings';
import PageDesigner from '../../components/pageDesignerPanel/PageDesignerPanel';
import { IPageDesignerPanelProps } from '../../components/pageDesignerPanel/IPageDesignerPanelProps';


export interface IPageDesignerWebPartProps {
  description: string;
}

export default class PageDesignerWebPart extends BaseClientSideWebPart<IPageDesignerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPageDesignerPanelProps > = React.createElement(
      PageDesigner,
      {
        Context: {
          PageContext: this.context.pageContext,
          SPHttpClient: this.context.spHttpClient,
          EnvironmentType: Environment.type
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
