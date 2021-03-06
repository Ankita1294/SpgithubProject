import * as React from 'react';
import styles from './SpGithubproject.module.scss';
import { ISpGithubprojectProps } from './ISpGithubprojectProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpGithubproject extends React.Component<ISpGithubprojectProps, {}> {
  public render(): React.ReactElement<ISpGithubprojectProps> {
    return (
      <div className={ styles.spGithubproject }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Managing Sharepoint Framework using Github and Azure DevOps!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
