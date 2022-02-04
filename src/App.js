import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { HospitalList } from './hospitals';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="hospitals" list={HospitalList} />
  </Admin>
);

export default App;