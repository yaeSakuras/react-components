import React, {FC, useContext} from "react"
import classNames from "classnames"
import {MenuContext} from "../Menu/menu"

export interface IMenuItemProps {
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const MenuItem: FC<IMenuItemProps> = props => {
    const {
        children,
        index,
        className,
        disabled,
        style
    } = props;
    const context = useContext(MenuContext);

    const classes = classNames('menu-item', {
        'is-disabled': disabled,
        'is-active': context.index === index
    }, className)

    const onClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    }

    return (
        <li
            className={classes}
            style={style}
            onClick={onClick}
        >
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem';
export default MenuItem;
