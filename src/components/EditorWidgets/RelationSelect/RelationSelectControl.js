import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import uuid from 'uuid/v4'
import { debounce } from 'lodash'
import { connect } from 'react-redux'
import { currentBackend } from 'Backends/backend';
import * as entriesActions from 'Actions/entries'

class RelationControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node,
    field: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props, ctx) {
    super(props, ctx)
    this.controlID = uuid()
    this.didInitialSearch = false
    this.state = { entries: [], isLoading: true }
  }

  componentDidMount() {
    const backend = currentBackend(this.props.config)

    backend.listAllEntries(this.props.collections.get(this.props.field.get('collection'))).then(entries => this.setState({ entries, isLoading: false }))
  }

  onSelect = ({ value }, { action }) => {
    this.props.onChange(value, { [this.props.field.get('collection')]: { [this.props.field.get('valueField')]: value } })
  }

  render() {
    const {
      value,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props

    const options = this.state.entries.map(entry => ({
      value: entry.data[this.props.field.get('valueField')],
      label: this.props.field.get('displayFields').map(field => entry.data[field]).join(' ')
    }))

    return (
      <Select
        id={forID}
        className={classNameWrapper}
        options={options}
        onChange={this.onSelect}
        isLoading={this.state.isLoading}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        value={{ value, label: value }}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { className } = ownProps

  return { collections: state.collections, config: state.config, className }
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    withRef: true
  }
)(RelationControl)
