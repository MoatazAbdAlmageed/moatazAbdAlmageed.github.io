import React from 'react';
import styled from 'styled-components';
import config from '../../config';
import Loader from './Loader';

const endpoint = `https://api.github.com/users/${config.githubUsername}/repos?type=owner&sort=updated&type=public&per_page=10&page=1`;

const repositoriesLink = `https://github.com/${config.githubUsername}?tab=repositories`;

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: 'loading',
    };
  }
  componentDidMount() {
    fetch(endpoint, {
      credentials: 'same-origin', // Useful for including session ID (and, IIRC, authorization headers)
    })
      .then(response => response.json())
      .then(repos => {
        this.setState({ repos, status: 'ready' });
      })
      .catch(error => console.error(error));
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="repositories__repo-link"
              href={repositoriesLink}
            >
              <i className="fab fa-github" /> Github repositories
            </a>
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
                  {this.state.repos.map(repo => {
                    const {
                      name,
                      html_url,
                      description,
                      updated_at,
                      stargazers_count,
                    } = repo;
                    const showStargazersCount = false; // Todo make it true later when have start
                    return (
                      <React.Fragment key={name}>
                        <div className="repositories__repo">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repositories__repo-link"
                            href={html_url}
                          >
                            <i className="fab fa-github" />{' '}
                            <strong>{name}</strong>
                          </a>
                          <div>{description}</div>
                          <div className="repositories__repo-date text-right">
                            <span className="badge badge-secondary badge badge-secondary-dark">
                              Updated: {new Date(updated_at).toUTCString()}
                            </span>
                          </div>
                          {showStargazersCount ? (
                            <div className="repositories__repo-star">
                              ★ {stargazers_count}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                        <hr />
                      </React.Fragment>
                    );
                  })}
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
