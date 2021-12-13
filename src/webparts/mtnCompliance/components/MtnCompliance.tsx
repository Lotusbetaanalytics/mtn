import * as React from 'react';
import styles from './MtnCompliance.module.scss';
import * as jQuery from 'jquery';
import { IMtnComplianceProps } from './IMtnComplianceProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import ComplianceUniverse from './screens/ComplianceUniverse';
import BulkUpload from './screens/BulkUpload';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import * as pnp from 'sp-pnp-js';

export default class MtnCompliance extends React.Component<IMtnComplianceProps, {}> {
  public render(): React.ReactElement<IMtnComplianceProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/complianceUniverse" exact component={ComplianceUniverse} />
            <Route path="/complianceUniverse/bulkEntry" exact component={BulkUpload} />

          </Switch>
        </HashRouter>
      </>
    );
  }
  public componentDidMount() {
    this._userProfile();


  }
  private _userProfile(): void {
    pnp.sp.profiles.myProperties.get()
      .then((response) => {
        this.setState({ Name: response.DisplayName, Email: response.Email, DP: response.PictureUrl });
        localStorage.setItem('MyName', response.DisplayName);
        localStorage.setItem('Email', response.Email);
      });



  }
}
