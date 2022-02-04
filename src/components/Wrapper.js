import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Wrapper extends Component {
  render() {
    const { children, id, align, bg, p, m } = this.props;
    return (
      <Stack
        mb={10}
        id={id}
        align={align}
        bg={bg}
        borderRadius="lg"
        p={p || 5}
        m={m || 0}
      >
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
