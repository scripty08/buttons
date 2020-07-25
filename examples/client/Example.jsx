import React, { Fragment } from 'react';
import {
    Button,
    EditButton,
    SaveButton,
    CloseButton,
    OkButton,
    MoveButton,
    AddButton,
    MenuButton,
    CancelButton
} from '@src';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import ExclamationOutlined from '@ant-design/icons/lib/icons/ExclamationOutlined';
import { DeleteButton } from '@src/Button';

export const Example = () => {

    return (
        <Fragment>
            <h1>Custom Buttons</h1>
            <Button icon={<ExclamationOutlined />} color={'#1d6fad'}>Custom</Button>
            <EditButton color={'#1d6fad'} />
            <SaveButton color={'#12a525'} />
            <CloseButton />
            <MoveButton color={'rgba(201,5,156,0.49)'}/>
            <AddButton color={'#1d6fad'} />
            <CancelButton color={'#c40000'} />
            <OkButton color={'#eff700'} />
            <DeleteButton color={'red'} />
            <EditButton iconBtn color={'#1d6fad'}/>
            <DeleteButton color={'#c40000'} iconBtn/>
            <CloseButton color={'#fff'} iconBtn/>
            <CloseButton color={'#000000'} iconBtn/>

            <h1>Menu Buttons</h1>
            <MenuButton icon={<PlusOutlined/>} items={[
                <a aria-current={'page'} href={'#'} className={'active'}>Article</a>,
                <a aria-current={'page'} href={'#'} className={'active'}>Article2</a>
            ]}>Menu</MenuButton>

        </Fragment>
    );
};
