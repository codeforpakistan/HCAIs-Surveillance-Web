import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { HospitalList } from './hospitals';
import { HcaiList } from './hcai';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://18.139.146.61:3000');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="hospitals" list={HospitalList} />
    <Resource name="hcai" list={HcaiList} />
  </Admin>
);

export default App;
