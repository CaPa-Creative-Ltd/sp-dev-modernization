import * as React from 'react';

import { IPageLayoutConfigEditorProps } from './IPageLayoutConfigEditorProps';

export class PageLayoutConfigEditor extends React.Component<IPageLayoutConfigEditorProps, {}> {

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
       Page Layout Config Editor
      </div>
    );
  }
}
