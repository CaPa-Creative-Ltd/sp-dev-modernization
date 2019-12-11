import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { DynamicNavigator } from '../dynamicNavigator';
import { FixedWebPartMappingEditor } from '../fixedWebPartMappingEditor';
import { HeaderConfigEditor } from '../headerConfigEditor';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
*/

export class PageDesigner extends React.Component<IPageDesignerProps, {}> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IPageDesignerProps> {
    return (
      <div className={styles.pageDesigner}>
        Page designer

        <div className={styles.nav}>
          <DynamicNavigator />
        </div>
        <div className={styles.editorContainer}>
          Editor Container

          <HeaderConfigEditor />

          <FixedWebPartMappingEditor />

        </div>
      </div>
    );
  }
}
