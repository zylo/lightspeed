import { Button, Typography } from '@mui/material';
import { IconRocket } from '@tabler/icons-react';
import { Navigate, useNavigate } from 'react-router';
import './Intro.scss';

export function Intro() {
  const navigate = useNavigate();

  if (localStorage.getItem('journeyStarted') === 'true') {
    return <Navigate to="/app" replace />;
  }

  function handleStartJourney() {
    localStorage.setItem('journeyStarted', 'true');
    navigate('/app');
  }

  return (
    <div className="intro">
      <section className="intro__container">
        <div className="intro__crawl">
          <div className="intro__title-container">
            <h3 className="intro__episode">Episode Z</h3>
            <h1 className="intro__title">This is the Way</h1>
          </div>

          <p>
            Prospective pilots from every corner of the galaxy gather, eager to prove their worth.
            Among them, a new challenger has emerged, shrouded in mystery and clad in armor.
          </p>

          <p>
            The Zylo Coding Guild, a revered council of tech wizards and pilot extraordinaires, has
            issued an epic challenge to any who dare claim the title of &quot;Senior Pilot.&quot;
          </p>

          <p>
            Our hero must navigate through the digital realms of hyperdrives and droids, combating
            bugs and decoding systems to rise above the rest.
          </p>

          <p>
            Will they defy the odds and ascend as a legend, or vanish into the void of forgotten
            code? The fate of their destiny rests in their hands...
          </p>

          <p>The galactic clock ticks. May the Source be with them.</p>
        </div>
      </section>
      <div className="intro__button-container">
        <img alt="Zylo Logo" src="/zylo_logo.svg" />
        <Typography variant="h5">Coding Challenge</Typography>
        <Button
          endIcon={<IconRocket />}
          onClick={handleStartJourney}
          size="large"
          variant="contained"
        >
          Start your journey
        </Button>
      </div>
    </div>
  );
}
