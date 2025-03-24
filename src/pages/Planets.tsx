import { DataGrid } from '@mui/x-data-grid';
import { Page } from '../components/Page';
import { PlanetsBriefing } from '../components/PlanetsBriefing';

export function Planets() {
  return (
    <Page briefing={<PlanetsBriefing />} title="Planets">
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid columns={[]} />
      </div>
    </Page>
  );
}
