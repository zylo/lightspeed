import { Grid2, Typography } from '@mui/material';
import { Link } from 'react-router';

export function PlanetsBriefing() {
  return (
    <Grid2 spacing={2} container>
      <Grid2 size={12}>
        <Typography variant="body1">
          Through user research we have concluded that a table with all the planets in the Star Wars
          universe is a must-have feature for any bounty hunter. This feature will allow our
          prospects to quickly access information about the planets where their targets might be
          hiding.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="h6">Primary Objectives</Typography>
        <Typography variant="body1">
          Check out <code>src/pages/Planets.tsx</code> to get started.
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1">
          To provide the best user experience, we&apos;ve determined that this table should:
        </Typography>
        <ul>
          <li>
            Use the Javscript fetch API to get the list of planets from{' '}
            <Link to="https://swapi.dev/documentation#planets">the SWAPI</Link>.
          </li>
          <li>
            Use the <Link to="https://mui.com/x/react-data-grid/">DataGrid</Link> component from MUI
            X.
          </li>
          <li>
            Include the following columns: &quot;Name&quot;, &quot;Population&quot;,
            &quot;Climate&quot;, &quot;Terrain&quot;, &quot;Gravity&quot;, &quot;Surface
            Water&quot;, and &quot;Rotation Period&quot;.
          </li>
          <li>
            Have the ability to sort the table by any column in ascending or descending order.
          </li>
          <li>Have a default page size of 10 with the ability to adjust it to 20 or 50.</li>
          <li>Have the ability to search by &quot;Name&quot;</li>
          <li>Format the data in a way that is easy to read and understand.</li>
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
            Create a custom UX for displaying the &quot;Residents&quot; of each planet, triggered
            from the table somehow.
          </li>
          <li>
            Provide the ability to filter the table by &quot;Climate&quot; and &quot;Terrain&quot;.
          </li>
          <li>Anything else you think might enhance the user experience beyond this.</li>
        </ul>
      </Grid2>
    </Grid2>
  );
}
