import { Divider, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Wrapper extends Component {
  render() {
    const { children, id, align, bg } = this.props;
    return (
      <Stack mb={10} id={id} align={align} bg={bg} borderRadius="lg" p={5}>
        {children}
        <Divider pt={10} pb={10} />
      </Stack>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  align: PropTypes.string,
  bg: PropTypes.string,
};

export default Wrapper;
