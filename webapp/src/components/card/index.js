import React from 'react';
import styles from './styles.scss';

class Card extends React.PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <div className={`${styles.card} ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
}

export default Card;
