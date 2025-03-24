import { Button } from '@mui/material';
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
            Bounty hunters from every corner of the galaxy gather, eager to prove their worth. Among
            them, a new Mandalorian has emerged, shrouded in mystery and clad in armor.
          </p>

          <p>
            The Zylo Coding Guild, a revered council of tech wizards and bounty elites, has issued
            an epic challenge to any who dare claim the title of &quot;Senior Hunter.&quot;
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
      <Button
        className="intro__button"
        color="secondary"
        endIcon={<IconRocket />}
        onClick={handleStartJourney}
        variant="contained"
      >
        Start your journey
      </Button>
    </div>
  );
}
