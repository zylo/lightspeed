import { Grid2, Typography } from '@mui/material';
import { Link } from 'react-router';

export function ApplicationBriefing() {
  return (
    <Grid2 spacing={2} container>
      <Grid2 size={12}>
        <Typography variant="body1">
          Any new pilot looking to make a name for themselves in the galaxy must first complete a{' '}
          <i>rigorous</i> application process. Unfortunately, it&apos;s come to our attention that
          the current application process is a bit... wonky. That&apos;s where you come in.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="h6">Primary Objectives</Typography>
        <Typography variant="body1">
          Check out <code>src/pages/Application.tsx</code> to get started.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">First, we need you to fix up this form:</Typography>
        <ul>
          <li>
            Each input should be required and the form should not submit if any fields are empty.
          </li>
          <li>
            The form should use the <code>validateApplication</code> function to validate the data
            on submission.
          </li>
          <li>
            The UX of the submission is lacking, so feel free to enhance it in any way you see fit.
          </li>
          <li>
            The options for &quot;Species&quot; and &quot;Starship&quot; are not very inclusive,
            let&apos;s expand those by leveraging the SWAPI for each with the{' '}
            <Link to="https://swapi.dev/documentation#species">species</Link> and{' '}
            <Link to="https://swapi.dev/documentation#starships">starships</Link> endpoints.
          </li>
          <li>
            In addition to the &quot;Name&quot; property, the &quot;Species&quot; and
            &quot;Starship&quot; autocomplete options should be formatted to include the the
            language and model respectively within the option in the dropdown.
          </li>
        </ul>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">
          Next, we need the &quot;Planet&quot; dropdown to be populated from the same SWAPI data used
          on the Planets page:
        </Typography>
        <ul>
          <li>
            Planet data should <strong>not</strong> be re-fetched when navigating between pages. If
            the data was already loaded on the Planets page, reuse it here.
          </li>
          <li>
            When a planet is selected, display its climate and terrain inline below the dropdown.
          </li>
          <li>
            If the user has applied filters on the Planets page (name, climate, terrain), this
            page&apos;s planet dropdown should offer an option to &quot;Show only filtered
            planets&quot; that respects those filters.
          </li>
          <li>
            All three filter types (name, climate, terrain) should persist across navigation between
            pages.
          </li>
          <li>
            If the user navigates directly to this page with no prior filter state, the dropdown
            should show all planets with no filter option visible.
          </li>
        </ul>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">
          Finally, the form submission needs a more robust UX. Use the provided{' '}
          <code>submitApplication()</code> mock function in{' '}
          <code>src/utilities/submitApplication.ts</code> to simulate a server response:
        </Typography>
        <ul>
          <li>
            On submit, immediately show a &quot;submitted&quot; confirmation view displaying the form
            data (optimistic update).
          </li>
          <li>
            While the request is pending, the user should see a clear pending/processing indicator.
          </li>
          <li>On success: confirm the submission with a success state.</li>
          <li>
            On conflict: the mock may return a conflict response indicating a field is no longer
            available, along with alternatives. Transition to an{' '}
            <strong>inline correction flow</strong> where the user can pick an alternative without
            losing the rest of their form data. After correction, re-submit.
          </li>
          <li>
            If the user navigates away during the pending window and returns, the pending/result
            state should still be visible (not reset to a blank form).
          </li>
        </ul>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="h6">Bonus Objectives</Typography>
        <Typography variant="body1">
          If you&apos;ve completed the primary objectives and have time to spare, consider
          implementing the following features:
        </Typography>
        <ul>
          <li>
            Add more resources from the SWAPI to the form, such as &quot;Vehicles&quot;. Ensure that
            anything you add is properly validated.
          </li>
          <li>Anything else you think might enhance the user experience beyond this.</li>
        </ul>
      </Grid2>
    </Grid2>
  );
}
