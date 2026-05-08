import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('Portfolio platform', () => {
  test('renders the landing page project archive', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /selected work/i })).toBeInTheDocument();
    expect(screen.getByText(/Kinfolk Retreats/i)).toBeInTheDocument();
    expect(screen.getByText(/Orbit Pay/i)).toBeInTheDocument();
  });

  test('filters projects from the search input', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/search the portfolio/i), 'food');

    expect(screen.getByText(/Verdant Market/i)).toBeInTheDocument();
    expect(screen.queryByText(/Orbit Pay/i)).not.toBeInTheDocument();
  });

  test('adds a new project from the form', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/project title/i), 'Northstar CMS');
    await user.type(screen.getByLabelText(/^client/i), 'Northstar Studio');
    await user.type(screen.getByLabelText(/category/i), 'Content Platform');
    await user.type(screen.getByLabelText(/year/i), '2026');
    await user.type(screen.getByLabelText(/tags/i), 'React, CMS');
    await user.type(
      screen.getByLabelText(/description/i),
      'A flexible publishing workspace for agency case studies.',
    );
    await user.click(screen.getByRole('button', { name: /publish project/i }));

    expect(screen.getByText(/Northstar CMS/i)).toBeInTheDocument();
    expect(screen.getByText(/Northstar Studio/i)).toBeInTheDocument();
    expect(screen.getByText('CMS')).toBeInTheDocument();
  });
});
