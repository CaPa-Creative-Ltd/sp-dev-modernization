import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { escape } from '@microsoft/sp-lodash-subset';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
*/

export default class PageDesigner extends React.Component<IPageDesignerProps, {}> {
  public render(): React.ReactElement<IPageDesignerProps> {
    return (
      <div className={ styles.pageDesigner }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
