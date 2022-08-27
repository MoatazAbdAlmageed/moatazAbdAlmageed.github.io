import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';

class Wrapper extends Component {
  render() {
    const { children, id, align, bg, p, m } = this.props;
    return (
      <Stack mb={10} id={id} align={align} bg={bg} p={p || 5} m={m || 0}>
        {children}
      </Stack>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  align: PropTypes.string,
  bg: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
};

export default Wrapper;
