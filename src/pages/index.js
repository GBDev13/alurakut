import Link from 'next/link';
import { MainGrid } from '../components/MainGrid'
import { Box } from '../components/MainGrid/Box'
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations/indes';
import ProfileSidebar from '../components/ProfileSidebar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommonds';

export default function Home() {
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map(user => (
                <li>
                  <Link href={`/users/${user}`} key={user}>
                    <a>
                      <img src={`https://github.com/${user}.png`} />
                      <span>{user}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
