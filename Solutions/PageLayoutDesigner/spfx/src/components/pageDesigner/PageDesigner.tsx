import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/components/Panel';


/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
*/

export default class PageDesignerPanel extends React.Component<IPageDesignerProps, {}> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerProps) {
    super(props);


  }


  /**
   *  Render method for the web part
   */
  public render(): React.ReactElement<IPageDesignerProps> {
    return (
      <div className={styles.pageDesigner}>
        <div className={styles.nav}>

        </div>
        <div className={styles.editorContainer}>

        </div>
      </div>
    );
  }
}
