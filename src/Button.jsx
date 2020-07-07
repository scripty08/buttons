import React from 'react';
import './Button.scss';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import DragOutlined from '@ant-design/icons/lib/icons/DragOutlined';
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined';
import SaveOutlined from '@ant-design/icons/lib/icons/SaveOutlined';
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined';
import CheckOutlined from '@ant-design/icons/lib/icons/CheckOutlined';

export const Button = (props) => {
    let {
        onClick,
        children,
        icon = '',
        size = 'normal',
        color = 'blue',
        iconBtn,
        ...restProps
    } = props;

    let classes = `button button-default size-${size} color-${color}`;

    if (iconBtn) {
        classes = classes + ' icon-btn';
        children = '';
    }

    return (
        <button {...restProps} onClick={onClick} className={classes} type="submit">
            <span className={'label'}>
                <span className={'start-icon icon-small'}>{icon}</span>
                <span className={'text'}>{children}</span>
            </span>
        </button>
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
