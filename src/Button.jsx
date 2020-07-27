import React from 'react';
import './Button.scss';
import styled from 'styled-components';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import DragOutlined from '@ant-design/icons/lib/icons/DragOutlined';
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined';
import SaveOutlined from '@ant-design/icons/lib/icons/SaveOutlined';
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined';
import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';
import Colour from 'color';

const StyledButton = styled.button`
    color: #fff;
    color: ${props => (props.colors.color ? props.colors.color : '#454545')};
    background-color: ${props => (props.colors.backgroundColor ? props.colors.backgroundColor : '#fff')};
    &:hover {
        color: ${props => (props.colors.hoverColor ? props.hoverColor : '#000')};
        background-color: ${props => (props.colors.backgroundHoverColor ? props.colors.backgroundHoverColor : '#fff')}
    }
`;

export const Button = (props) => {
    let {
        onClick,
        children,
        icon = '',
        size = 'normal',
        iconBtn,
        rounded,
        color = '#fff',
        items = [],
        ...restProps
    } = props;

    let classes = `button button-default size-${size}`;

    const generatedColor = Colour(color);
    const lightenColor = generatedColor.darken(0.1)

    let colors = {
        color: '#000',
        hoverColor: '#000',
        backgroundColor: generatedColor.hex(),
        backgroundHoverColor: lightenColor
    };

    if (generatedColor.isDark()) {
        colors = {
            color: '#fff',
            hoverColor: '#fff',
            backgroundColor: generatedColor.hex(),
            backgroundHoverColor: lightenColor
        };
    }

    if (iconBtn) {
        classes = classes + ' icon-btn';
        children = '';
    }

    if (rounded) {
        classes = classes + ' icon-btn rounded';
        children = '';
    }

    if (items.length > 0) {
        classes = classes + ' dropdown';
    }

    if (items.length > 0 && iconBtn) {
        classes = classes + ' icon-btn dropdown';
        children = '';
    }

    return (
        <StyledButton colors={colors} {...restProps} onClick={onClick} className={classes} type="submit">
            <span className={'label'}>
                <span className={'start-icon icon-small'}>{icon}</span>
                <span className={'text'}>{children}</span>
            </span>
            {
                (items.length > 0) ? (
                    <div className="dropdown-content">
                        {items}
                    </div>
                ) : null
            }
        </StyledButton>
    );
};

export const AddButton = (props) => {
    const { size = 'small', onClick, label = 'Add', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<PlusOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const MoveButton = (props) => {
    const { size = 'small', onClick, label = 'Move', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<DragOutlined rotate={45}/>} onClick={onClick}>{label}</Button>
    );
};

export const EditButton = (props) => {
    const { size = 'small', onClick, label = 'Edit', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<EditOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const SaveButton = (props) => {
    const { size = 'small', onClick, label = 'Save', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<SaveOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const CloseButton = (props) => {
    const { size = 'small', onClick, label = 'Close', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<CloseOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const OkButton = (props) => {
    const { size = 'small', onClick, label = 'Ok', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<CheckOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const CancelButton = (props) => {
    const { size = 'small', onClick, label = 'Cancel', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<CloseOutlined/>} onClick={onClick}>{label}</Button>
    );
};

export const DeleteButton = (props) => {
    const { size = 'small', onClick, label = 'Delete', ...restProps } = props;
    return (
        <Button {...restProps} size={size} icon={<DeleteOutlined/>} onClick={onClick}>{label}</Button>
    );
};
