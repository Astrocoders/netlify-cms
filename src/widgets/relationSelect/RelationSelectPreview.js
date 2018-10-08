import React from 'react'
import PropTypes from 'prop-types'
import { WidgetPreviewContainer } from '../../ui'

const RelationPreview = ({ value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>

RelationPreview.propTypes = {
  value: PropTypes.node,
}

export default RelationPreview
