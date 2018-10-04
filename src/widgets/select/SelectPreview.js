import PropTypes from 'prop-types';
import React from 'react';
import { WidgetPreviewContainer } from '../../ui';

const SelectPreview = ({ value }) => (
  <WidgetPreviewContainer>{value ? value.toString() : null}</WidgetPreviewContainer>
);

SelectPreview.propTypes = {
  value: PropTypes.string,
};

export default SelectPreview;
