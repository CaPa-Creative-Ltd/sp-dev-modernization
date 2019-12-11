import { SPHttpClient } from '@microsoft/sp-http';
import { PageContext, SPField } from '@microsoft/sp-page-context';
import { ListViewAccessor } from "@microsoft/sp-listview-extensibility";

/**
 * Customizer context interface.
 * Can be used in different types of customizers
 */
export interface IContext {
    spHttpClient: SPHttpClient;
    pageContext: PageContext;
    listView?: ListViewAccessor | null;
}

/**
 * Parent of all props interfaces that needs context
 */
export interface IProps {
    context: IContext;
}
