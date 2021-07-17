import { Box } from '../MainGrid/Box';

export default function ProfileSidebar() {
  const githubUser = 'GBDev13';

  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
};
