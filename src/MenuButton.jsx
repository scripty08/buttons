import React from 'react';
import './MenuButton.scss';

export const MenuButton = (props) => {
    let {
        onClick,
        children = 'Menu',
        icon = '',
        size = 'normal',
        color = 'blue',
        iconBtn,
        items,
        ...restProps
    } = props;

    let classes = `button button-default size-${size} color-${color} dropdown`;

    if (iconBtn) {
        classes = classes + ' icon-btn';
        children = '';
    }
    return (
        <button {...restProps} className={classes}>
             <span className={'label'}>
                <span className={'start-icon icon-small'}>{icon}</span>
                <span className={'text'}>{children}</span>
            </span>
            <div className="dropdown-content">
                {items}
            </div>
        </button>
    )
}
