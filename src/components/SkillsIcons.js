import { Flex, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { Component } from 'react';

class SkillsIcons extends Component {
  // TODO:add icons to config file and use map
  render() {
    return (
      <Flex id="about">
        <UnorderedList styleType="none" className="icons">
          <ListItem float="left">
            {' '}
            <Image
              alt="javascript"
              title="javascript"
              height="50"
              src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="nodejs"
              title="nodejs"
              height="50"
              src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="expressjs"
              title="expressjs"
              height="50"
              src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="mongodb"
              title="mongodb"
              height="50"
              src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              title="reactjs"
              height="50"
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            />
          </ListItem>{' '} <ListItem float="left">
            {' '}
            <Image
              title="vuejs"
              height="50"
              src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="graphql"
              title="graphql"
              height="50"
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
            />{' '}
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="typescript"
              title="typescript"
              height="50"
              src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="PHP"
              title="PHP"
              height="50"
              src="https://www.vectorlogo.zone/logos/php/php-horizontal.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="mysql"
              title="mysql"
              height="50"
              src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="Laravel"
              title="Laravel"
              height="50"
              src="https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="wordpress"
              title="wordpress"
              height="50"
              src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="git"
              title="git"
              height="50"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="linux"
              title="linux"
              height="50"
              src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="Bash"
              title="Bash"
              height="50"
              src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="gatsbyjs"
              title="gatsbyjs"
              height="50"
              src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="electronjs"
              title="electronjs"
              height="50"
              src="https://www.vectorlogo.zone/logos/electronjs/electronjs-ar21.svg"
            />
          </ListItem>
          <ListItem float="left">
            {' '}
            <Image
              alt="docker"
              title="docker"
              height="50"
              src="https://www.vectorlogo.zone/logos/docker/docker-official.svg"
            />
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="sass"
              title="sass"
              height="50"
              src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg"
            />{' '}
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="HTML"
              title="HTML"
              height="50"
              src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
            />{' '}
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="CSS"
              title="CSS"
              height="50"
              src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"
            />{' '}
          </ListItem>{' '}
          <ListItem float="left">
            {' '}
            <Image
              alt="bootstrap"
              title="bootstrap"
              height="50"
              src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
            />{' '}
          </ListItem>{' '}
        </UnorderedList>
      </Flex>
    );
  }
}

export default SkillsIcons;
