import { redirect } from 'react-router-dom';
import Home from './home/home';
import Customers from './customers/customers';
import CustomerDetails from './customer-details/customer-details';
import Deals from './deals/deals';
import Reports from './reports/reports';
import Support from './support/support';
import Calendar from './calendar/calendar';
import Tasks from './tasks/tasks';

export const routes = [
  { index: true, loader: () => redirect('home') },
  { path: 'home', element: <Home />, text: 'Home' },
  { path: 'customers', element: <Customers />, text: 'Customers' },
  { path: 'customer-details', element: <CustomerDetails />, text: 'Customer details' },
  { path: 'customer-details/:rCustomerID', element: <CustomerDetails />, text: 'Customer details' },
  { path: 'deals', element: <Deals />, text: 'Deals' },
  { path: 'reports', element: <Reports />, text: 'Reports' },
  { path: 'support', element: <Support />, text: 'Support' },
  { path: 'calendar', element: <Calendar />, text: 'Calendar' },
  { path: 'tasks', element: <Tasks />, text: 'Tasks' }
];
