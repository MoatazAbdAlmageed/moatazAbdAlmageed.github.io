import React from 'react';
import jsonFetch from 'simple-json-fetch';
import styled from 'styled-components';
import config from '../../config';
import Loader from './Loader';

const endpoint = `https://api.github.com/users/${config.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`;

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: 'loading',
    };
  }
  async componentDidMount() {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' });
    }
  }
  render() {
    const { status } = this.state;
    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="repositories"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fab fa-github" /> Latest Github repositories
          </h2>
          <div className={this.props.className}>
            {status === 'loading' && (
              <div className="repositories__loader">
                <Loader />
              </div>
            )}
            {status === 'ready' && this.state.repos && (
              <React.Fragment>
                <div className="repositories__content">
                  {this.state.repos.map(repo => (
                    <React.Fragment key={repo.name}>
                      <div className="repositories__repo">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repositories__repo-link"
                          href={repo.html_url}
                        >
                          <strong>{repo.name}</strong>
                        </a>
                        <div>{repo.description}</div>
                        <div className="repositories__repo-date">
                          Updated: {new Date(repo.updated_at).toUTCString()}
                        </div>
                        <div className="repositories__repo-star">
                          ★ {repo.stargazers_count}
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #402d2d;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`;
