import { Autocomplete, Button, Grid2, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Page } from '../components/Page';
import { validateApplication } from '../utilities/validateApplication';
import { ApplicationBriefing } from '../components/ApplicationBriefing';

const starships = [
  {
    label: 'YT-1300 Freighter',
    value: 'YT-1300 Freighter',
  },
  {
    label: 'Razor Crest',
    value: 'Razor Crest',
  },
  {
    label: 'X Wing',
    value: 'X Wing',
  },
];

const species = [
  {
    label: 'Human',
    value: 'Human',
  },
  {
    label: 'Wookie',
    value: 'Wookie',
  },
  {
    label: 'Rodian',
    value: 'Rodian',
  },
];

export function Application() {
  const [formData, setFormData] = useState({ name: '', species: '', starship: '' });

  function handleSubmit() {
    alert('Starship submitted');
    validateApplication(formData);
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Page briefing={<ApplicationBriefing />} title="Pilot Application">
      <form onSubmit={handleSubmit}>
        <Grid2 spacing={2} container>
          <Grid2 size={12}>
            <Typography variant="h6">Pilot Application</Typography>
          </Grid2>
          <Grid2 size={12}>
            <TextField label="Name" onChange={handleChange} fullWidth />
          </Grid2>
          <Grid2 size={12}>
            <Autocomplete
              onChange={handleChange}
              options={species}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Species"
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                    },
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={12}>
            <Autocomplete
              onChange={handleChange}
              options={starships}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Starship"
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                    },
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size="auto">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Page>
  );
}
