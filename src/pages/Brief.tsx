import { Box, Button, Card, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router';
import { IconArrowRight } from '@tabler/icons-react';
import { Page } from '../components/Page';

export function Brief() {
  return (
    <Page
      briefing={
        <Grid2 spacing={2} container>
          <Grid2 size={12}>
            <Typography variant="body1">
              Welcome to Lightspeed, your gateway to the galaxy! We&apos;re excited to have you on
              board as a new &quot;pilot&quot;. Before you can take off, we need to make sure
              you&apos;re prepared for the journey ahead.
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body1">
              There are two primary tasks you&apos;ll need to complete to get started. The first is
              the Planets Task, which will test your ability to navigate the universe of tables and
              data display. The second is the Application Task, which will challenge your skills in
              building interactive forms and managing state.
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body1">
              Each task consists of two sets of objectives: primary and bonus. The primary
              objectives are required to complete the task, while the bonus objectives are optional
              but will help you stand out as a &quot;pilot&quot;.
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body1">
              It is recommended to complete the primary objectives on both tasks first and come back
              to the bonus tasks if you have time.
            </Typography>
          </Grid2>
          <br />
          <Grid2 size={12}>
            <Box sx={{ display: 'flex', gap: 'calc(1.25rem / 2)' }}>
              <Button
                component={Link}
                endIcon={<IconArrowRight />}
                to="planets"
                variant="contained"
              >
                Planets Task
              </Button>
              <Button
                component={Link}
                endIcon={<IconArrowRight />}
                to="application"
                variant="contained"
              >
                Application Task
              </Button>
            </Box>
            <br />
          </Grid2>
          <Card>
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBjdGt5MG5qMnAxazFvbjlkYmgzZDMzZmxxYnVpNGw1OW4xeGV1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VdvcRUBUB2jC4B8Zql/giphy.gif"
              style={{ display: 'flex' }}
            />
          </Card>
        </Grid2>
      }
      briefingAccordion={false}
      title="Briefing"
    />
  );
}
