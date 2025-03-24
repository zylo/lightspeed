import { Accordion, AccordionDetails, AccordionSummary, Grid2, Typography } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { ReactNode } from 'react';

type PageProps = {
  briefingAccordion?: boolean;
  briefing?: ReactNode;
  children?: ReactNode;
  title: string;
};
export function Page({ briefing, briefingAccordion = true, children, title }: PageProps) {
  return (
    <Grid2 spacing={2} container>
      <Grid2 size={12}>
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
      </Grid2>
      {briefing && (
        <Grid2 size={12}>
          {briefingAccordion ? (
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<IconChevronDown />}>
                <Typography variant="h5">Briefing</Typography>
              </AccordionSummary>
              <AccordionDetails>{briefing}</AccordionDetails>
            </Accordion>
          ) : (
            briefing
          )}
        </Grid2>
      )}
      {children && <Grid2 size={12}>{children}</Grid2>}
    </Grid2>
  );
}
