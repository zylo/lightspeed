import { Card, Grid2, Typography } from '@mui/material';

export function Void() {
  return (
    <Grid2 justifyContent="center" spacing={2} container>
      <Card>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajd0bDZ3dGVrNm4zbG0wYWQyeWV3cHF0cGw5aXFoejRmdDZsMmUwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornka9rAaKRA2Rkac/giphy.gif"
          style={{ display: 'flex' }}
        />
      </Card>
      <Grid2 size={12}>
        <Typography component="h1" textAlign="center" variant="h3">
          You&apos;re lost in the void.
        </Typography>
      </Grid2>
      <Grid2 spacing={12}>
        <i>Somehow</i>, you got lost in the void of space. Try navigating to <code>/app</code>.
      </Grid2>
    </Grid2>
  );
}
