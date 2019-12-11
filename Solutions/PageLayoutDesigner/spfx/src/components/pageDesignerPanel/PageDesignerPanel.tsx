import * as React from 'react';
import styles from './PageDesignerPanel.module.scss';
import { IPageDesignerPanelProps } from './IPageDesignerPanelProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/components/Panel';
import { IPageDesignerPanelState } from './IPageDesignerPanelState';

/*
  This is the overarching component providing the frame for the entire tool.
  Each sub component should be broken out into their respective components aiming to keep everything highly modular and re-usable
*/

export default class PageDesignerPanel extends React.Component<IPageDesignerPanelProps, IPageDesignerPanelState> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageDesignerPanelProps) {
    super(props);

    this.state = {
      panelOpen: false
    };
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
  public render(): React.ReactElement<IPageDesignerPanelProps> {

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
        <div className={styles.nav}>

        </div>
        <div className={styles.editorContainer}>

        </div>

      </Panel>

      <div className={styles.pageDesignerPanel}>
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
