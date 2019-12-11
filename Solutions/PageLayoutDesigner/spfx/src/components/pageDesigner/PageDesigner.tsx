import * as React from 'react';
import styles from './PageDesigner.module.scss';
import { IPageDesignerProps } from './IPageDesignerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/components/Panel';
import { IPageDesignerState } from './IPageDesignerState';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
*/

export default class PageDesigner extends React.Component<IPageDesignerProps, IPageDesignerState> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerProps) {
    super(props);

    this.state = {
      panelOpen: false
    }
  }

  /**
   *  Open Handler for the panel
   */
  private _handleOpenPanel = () => {
    this.setState({
      panelOpen: true
    });
  }

  /**
   *  Close Handler for the panel
   */
  private _handleClosePanel = () => {
    this.setState({
      panelOpen: false
    });
  }


  /**
   *  Render method for the web part
   */
  public render(): React.ReactElement<IPageDesignerProps> {

    const buttonProps = {
      text: "Open Designer",
      onClick: this._handleOpenPanel
    };

    return (

      <div>

      <Panel isOpen={this.state.panelOpen}
        isBlocking={true}
        hasCloseButton={true}
        onDismiss={this._handleClosePanel}
        type={PanelType.extraLarge}
        isFooterAtBottom={true}
        onRenderNavigation={() => { return undefined; }}
        headerText="Page Designer"

        isLightDismiss={true}
      >

      </Panel>

      <div className={styles.pageDesigner}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Page Designer Test Web Part</span><br />
              <PrimaryButton {...buttonProps} />
            </div>
          </div>
        </div>
      </div>

      </div>
    );
  }
}
