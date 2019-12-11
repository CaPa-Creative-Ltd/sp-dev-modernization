import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PageDesignerWebPartStrings';
import PageDesigner from '../../components/pageDesigner/PageDesigner';
import { IPageDesignerProps } from '../../components/pageDesigner/IPageDesignerProps';

export interface IPageDesignerWebPartProps {
  description: string;
}

export default class PageDesignerWebPart extends BaseClientSideWebPart<IPageDesignerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPageDesignerProps > = React.createElement(
      PageDesigner,
      {
        Context: {
          pageContext: this.context.pageContext,
          spHttpClient: this.context.spHttpClient
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
