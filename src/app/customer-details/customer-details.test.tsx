import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CustomerDetails from './customer-details';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders CustomerDetails component', () => {
  const wrapper = render(<CustomerDetails />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});