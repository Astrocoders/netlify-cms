import React from 'react'
import PropTypes from 'prop-types'
import { css, injectGlobal, cx } from 'react-emotion'
import { shadows, colors, lengths } from '../../ui'

injectGlobal`
  .notif-transition-enter {
    opacity    : 0.01;
    transition : opacity .5s ease-in;
  }

  .notif-transition-enter-active {
    opacity : 1;
  }

  .notif-transition-leave {
    opacity    : 1;
    transition : opacity .5s ease-in;
  }

  .notif-transition-leave-active {
    opacity : 0.01;
  }

  .notif {
    position      : relative;
    font          : 1rem normal Helvetica, sans-serif;
    overflow      : hidden;
    border-radius : 4px;
    margin-bottom : 2px;
    max-height    : 400px;
    box-sizing    : border-box;
    box-shadow    : 0 0 1px 1px rgba(10, 10, 11, .125);
    padding       : 0.5rem;
    color         : #fff;
  }

  .notif--success {
    background-color: #64ce83;
  }

  .notif--info {
    background-color: #3ea2ff;
  }

  .notif--warning {
    background-color: #ff7f48;
  }

  .notif--danger {
    background-color: #e74c3c;
  }

  .notif__container {
    position  : fixed;
    top       : 10px;
    right     : 0;
    left      : 0;
    z-index   : 1000;
    width     : 80%;
    max-width : 400px;
    margin    : auto;
  }

  .notif__container {
    z-index: 10000;
  }
`

const styles = {
  toast: css`
    ${shadows.drop};
    background-color: ${colors.background};
    color: ${colors.textLight};
    border-radius: ${lengths.borderRadius};
    margin: 10px;
    padding: 20px;
    overflow: hidden;
  `,
  info: css`
    background-color: ${colors.infoBackground};
    color: ${colors.infoText};
  `,
  success: css`
    background-color: ${colors.successBackground};
    color: ${colors.successText};
  `,
  warning: css`
    background-color: ${colors.warnBackground};
    color: ${colors.warnText};
  `,
  danger: css`
    background-color: ${colors.errorBackground};
    color: ${colors.errorText};
  `,
}

export const Toast = ({ kind, message }) => <div className={cx(styles.toast, styles[kind])}>{message}</div>

Toast.propTypes = {
  kind: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
  message: PropTypes.string,
}
