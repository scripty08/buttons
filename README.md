# @scripty/react-store

# Description

lightweight react button library.

![alt text](./react-buttons.png "Hangar")

# Usage
```bash
npm install -s @scripty/react-buttons
```

##### Client: Example.jsx

```javascript
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
} from '@scripty/react-buttons';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import ExclamationOutlined from '@ant-design/icons/lib/icons/ExclamationOutlined';

export const Example = () => {

    return (
        <Fragment>
            <h1>Custom Buttons</h1>
            <Button icon={<ExclamationOutlined />}>Custom</Button>
            <EditButton />
            <SaveButton />
            <CloseButton />
            <MoveButton color={'white'}/>
            <AddButton />
            <CancelButton color={'red'} />
            <OkButton color={'yellow'} />

            <h1>Menu Buttons</h1>
            <MenuButton icon={<PlusOutlined/>} items={[
                <a aria-current={'page'} href={'#'} className={'active'}>Article</a>,
                <a aria-current={'page'} href={'#'} className={'active'}>Article2</a>
            ]}>Menu</MenuButton>

        </Fragment>
    );
};
```
