// components/NotificationView/connect.js

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeNotification, selectNextNotification } from '../../data/notifications';

const mapStateToProps = createStructuredSelector({
  nextNotification: selectNextNotification
});
const mapDispatchToProps = { removeNotification };

export default connect(mapStateToProps, mapDispatchToProps);