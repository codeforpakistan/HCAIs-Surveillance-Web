import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const HospitalList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="contact" />
            <TextField source="address" />
        </Datagrid>
    </List>
);