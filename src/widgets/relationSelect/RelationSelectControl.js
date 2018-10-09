import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import uuid from 'uuid/v4'

export default class RelationSelectControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node,
    field: PropTypes.node,
    isFetching: PropTypes.bool,
    fetchID: PropTypes.string,
    query: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    queryHits: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  }

  constructor(props, ctx) {
    super(props, ctx)
    this.controlID = uuid()
    this.state = {
      options: [],
    }
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidMount() {
    this.props.query(this.controlID, this.props.field.get('collection'))
  }

  componentDidUpdate(prevProps) {
    const hits = this.props.queryHits.get ? this.props.queryHits.get(this.controlID, []) : []

    if (this.props.queryHits === prevProps.queryHits) return

    const field = this.props.field.get('valueField')
    const searchFields = this.props.field.get('searchFields').toJS()
    const options = hits.map(({ data = {} } = {}) => ({
      label: searchFields.map(f => data[f]).join(' - '),
      value: data[field],
    }))
    this.setState({ options })
  }

  render() {
    return (
      <div style={{ position: 'relative', zIndex: 999 }}>
        <Select
          defaultValue={{ value: this.props.value, label: this.props.value }}
          isLoading={this.props.isLoading}
          onChange={({ value }) => this.props.onChange(value)}
          options={this.state.options}
          id={this.props.forID}
          className={this.props.classNameWrapper}
          onFocus={this.props.setActiveStyle}
          onBlur={this.props.setInactiveStyle}
        />
      </div>
    )
  }
}
