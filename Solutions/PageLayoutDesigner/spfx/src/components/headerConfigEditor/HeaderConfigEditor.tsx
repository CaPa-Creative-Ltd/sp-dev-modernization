import * as React from 'react';
import { IHeaderConfigEditorProps } from './IHeaderConfigEditorProps';

export class HeaderConfigEditor extends React.Component<IHeaderConfigEditorProps, {}> {

  /**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IHeaderConfigEditorProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IHeaderConfigEditorProps> {
    return (
      <div>
        Header Config Editor
      </div>
    );
  }
}
