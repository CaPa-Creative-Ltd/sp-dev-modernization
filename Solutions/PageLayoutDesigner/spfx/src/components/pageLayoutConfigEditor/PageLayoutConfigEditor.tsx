import * as React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

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

          <TextField
            aria-labelledby={this._labelId}
            label={strings.AlsoAppliesToLabel}
            onRenderLabel={() => {
              return <HelpfulLabel Label={strings.AlsoAppliesToLabel} HelpfulDescription={strings.AlsoAppliesToHelpfulDescription} />;
            }}
          />

        {
        //This needs some work, not right
        }
        <HelpfulLabel Label={strings.PageLayoutTemplateLabel} HelpfulDescription={strings.PageLayoutTemplateHelpfulDescription} />
        <Dropdown
          ariaLabel={strings.PageLayoutTemplateLabel}
          styles={{ dropdown: { width: 300 } }}
          options={
            [{ key: 'AutoDetect', text: 'Auto Detect', },
            { key: 'G', text: 'Option g' },
            { key: 'H', text: 'Option h' },
            { key: 'I', text: 'Option i' },
            { key: 'J', text: 'Option j' } ]
          }
        />

        {
          //This needs some work, not right
        }
        <HelpfulLabel Label={strings.PageLayoutHeaderLabel} HelpfulDescription={strings.PageLayoutHeaderHelpfulDescription} />
        <Dropdown
          ariaLabel={strings.PageLayoutHeaderLabel}
          styles={{ dropdown: { width: 300 } }}
          options={
            [{ key: 'AutoDetect', text: 'Auto Detect', },
            { key: 'G', text: 'Option g' },
            { key: 'H', text: 'Option h' },
            { key: 'I', text: 'Option i' },
            { key: 'J', text: 'Option j' } ]
          }
        />

        <Toggle
          label={
            <HelpfulLabel Label={strings.IncludeVerticalSectionLabel} HelpfulDescription={strings.IncludeVerticalSectionHelpfulDescription} />
          }
          inlineLabel
          onText="On"
          offText="Off"
        />

        </Stack>
      </div>
    );
  }
}
