import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DynamicDropdown from './DynamicDropdown';
import axios from 'axios';

jest.mock('axios'); 

test('renders dropdown with table names and fetches data on selection', async () => {
  const mockData = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

  axios.get.mockResolvedValueOnce({ data: mockData });

  const { getByLabelText, getByText } = render(<DynamicDropdown />);
  const selectDropdown = getByLabelText('Select Table:');
  
  fireEvent.change(selectDropdown, { target: { value: 'country' } });

  await waitFor(() => {
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });
});
















// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import DynamicDropdown from './DynamicDropdown';

// test('renders dropdown with table names and fetches data on selection', async () => {
//   const mockData = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
//   jest.mock('axios', () => ({
//     get: jest.fn((url) => {
//       if (url === '/api/country') {
//         return Promise.resolve({ data: mockData });
//       }
//       return Promise.reject(new Error('Not found'));
//     }),
//   }));

//   const { getByLabelText, getByText } = render(<DynamicDropdown />);
//   const selectDropdown = getByLabelText('Select Table:');
  
//   fireEvent.change(selectDropdown, { target: { value: 'country' } });

//   await waitFor(() => {
//     expect(getByText('Loading...')).toBeInTheDocument();
//   });

//   await waitFor(() => {
//     expect(getByText('Item 1')).toBeInTheDocument();
//     expect(getByText('Item 2')).toBeInTheDocument();
//   });
// });