import * as React from "react";
import { List, Datagrid, TextField, EmailField, ArrayField, SingleFieldList, ChipField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <ArrayField source="roles">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);