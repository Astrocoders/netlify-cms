import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from '../../ui';

const DatePreview = ({ value }) => (
  <WidgetPreviewContainer>{value ? value.toString() : null}</WidgetPreviewContainer>
);

DatePreview.propTypes = {
  value: PropTypes.object,
};

export default DatePreview;
