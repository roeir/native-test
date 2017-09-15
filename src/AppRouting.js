import { StackNavigator } from 'react-navigation';

import LoginForm from './components/Auth/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

export const UserStack = StackNavigator({
  EmployeeList: {
    screen: EmployeeList,
    navigationOptions: {
      title: 'Employees'
    }
  },
  EmployeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: {
      title: 'Create a new employee',
    },
  },
}, {
  initialRouteName: 'EmployeeList',
});

export const AppStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
    },
  },
  UserStack: {
    screen: UserStack,
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});

// const defaultGetStateForAction = AppStack.router.getStateForAction;
//
// AppStack.router.getStateForAction = (action, state) => {
//   if (state && action.type === 'REPLACE_CURRENT_SCREEN') {
//     const routes = [
//       ...state.routes.slice(0, state.routes.length - 1),
//       action.payload,
//     ];
//     const updState = {
//       ...state,
//       routes,
//       index: routes.length - 1,
//     };
//     console.log(updState);
//     return updState;
//   }
//   return defaultGetStateForAction(action, state);
// };