import React, { Fragment } from 'react';
import {
    Button,
    EditButton,
    SaveButton,
    CloseButton,
    OkButton,
    MoveButton,
    AddButton,
    CancelButton, LeftButton, DoubleLeftButton, RightButton, DoubleRightButton
} from '../../src';
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
            <CancelButton color={'#c40000'} />
            <OkButton color={'#eff700'} />
            <DeleteButton color={'red'} />
            <EditButton iconBtn color={'#1d6fad'}/>
            <DeleteButton color={'#c40000'} iconBtn/>
            <CloseButton color={'#fff'} iconBtn/>
            <CloseButton color={'#000000'} iconBtn/>
            <DoubleLeftButton color={'#1d6fad'} iconBtn/>
            <LeftButton color={'#1d6fad'} iconBtn/>
            <RightButton color={'#1d6fad'} iconBtn/>
            <DoubleRightButton color={'#1d6fad'} iconBtn/>

            <h1>Menu Buttons</h1>
            <AddButton color={'#1d6fad'} items={[
                <a aria-current={'page'} href={'#'} className={'active'}>Article</a>,
                <a aria-current={'page'} href={'#'} className={'active'}>Article2</a>
            ]}/>

            <h1>Menu Icon Buttons</h1>
            <AddButton color={'#1d6fad'} items={[
                <a aria-current={'page'} href={'#'} className={'active'}>Article</a>,
                <a aria-current={'page'} href={'#'} className={'active'}>Article2</a>
            ]} iconBtn/>

        </Fragment>
    );
};
