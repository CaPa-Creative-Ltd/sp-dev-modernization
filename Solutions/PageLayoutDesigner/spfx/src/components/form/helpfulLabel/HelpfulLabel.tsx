import * as React from 'react';

import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Callout } from 'office-ui-fabric-react/lib/Callout';

import { IHelpfulLabelProps } from './IHelpfulLabelProps';
import { IHelpfulLabelState } from './IHelpfulLabelState';

export class HelpfulLabel extends React.Component<IHelpfulLabelProps, IHelpfulLabelState> {

  private _descriptionId: string = getId('description');
  private _iconButtonId: string = getId('iconButton');
  private _labelId: string = getId('label');

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IHelpfulLabelProps) {
    super(props);

    this.state = {
      isCalloutVisible: false
    };
  }

  private _onIconClick = (): void => {
    this.setState({ isCalloutVisible: !this.state.isCalloutVisible });
  };

  private _onDismiss = (): void => {
    this.setState({ isCalloutVisible: false });
  };

  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IHelpfulLabelProps> {

    return (
      <>
        <Stack horizontal verticalAlign="center">
          <span id={this._labelId}>{this.props.Label}</span>
          <IconButton
            id={this._iconButtonId}
            iconProps={{ iconName: 'Info' }}
            title="Info"
            ariaLabel="Info"
            onClick={this._onIconClick}
            styles={{ root: { marginBottom: -3 } }}
          />
        </Stack>
        {this.state.isCalloutVisible && (
          <Callout
            target={'#' + this._iconButtonId}
            setInitialFocus={true}
            onDismiss={this._onDismiss}
            ariaDescribedBy={this._descriptionId}
            role="alertdialog"
          >
            <Stack tokens={{ childrenGap: 20 }} horizontalAlign="start" styles={{ root: { padding: 20 } }}>
              <span id={this._descriptionId}>{this.props.HelpfulDescription}</span>
              <DefaultButton onClick={this._onDismiss}>{this.props.CloseButtonText || "Close"}</DefaultButton>
            </Stack>
          </Callout>
        )}
      </>
    );
  }
}
