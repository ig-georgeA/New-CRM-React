import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Deals from './deals';
import 'element-internals-polyfill';

test('renders Deals component', () => {
  const wrapper = render(<Deals />);
  expect(wrapper).toBeTruthy();
});