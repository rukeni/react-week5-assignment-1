import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { queryByText } = render(
    <App />,
  );

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
});
