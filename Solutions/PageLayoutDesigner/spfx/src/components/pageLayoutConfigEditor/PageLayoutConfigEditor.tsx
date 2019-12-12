import * as React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

import { IPageLayoutConfigEditorProps } from './IPageLayoutConfigEditorProps';
import { IPageLayoutConfigEditorState } from './IPageLayoutConfigEditorState';
import { HelpfulLabel } from '../form/helpfulLabel';

import * as strings from 'PageLayoutConfigComponentStrings';

export class PageLayoutConfigEditor extends React.Component<IPageLayoutConfigEditorProps, IPageLayoutConfigEditorState> {

  private _labelId: string = getId('label');

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IPageLayoutConfigEditorProps) {
    super(props);

  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IPageLayoutConfigEditorProps> {

    return (
      <div>
        <h3>{strings.PageLayoutConfigEditorTitle}</h3>
        <Stack tokens={{ childrenGap: 20 }}>
          <TextField
            aria-labelledby={this._labelId}
            label={strings.AssociatedContentTypeLabel}
            onRenderLabel={() => {
              return <HelpfulLabel Label={strings.AssociatedContentTypeLabel} HelpfulDescription={strings.AssociatedContentTypeHelpfulDescription} />;
            }}
          />
        </Stack>
      </div>
    );
  }
}
