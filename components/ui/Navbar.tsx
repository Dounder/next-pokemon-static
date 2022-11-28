import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 2vmin 0 1vmin',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="App icon"
        width={70}
        height={70}
      />

      <Link href={'/'} style={{ display: 'flex' }} passHref>
        <Text color="white" css={{ margin: 'none' }} h2>
          P
        </Text>
        <Text color="white" css={{ margin: 'none' }} h3>
          okemón
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href={'/favorites'} passHref>
        <Text color="white">Favorites</Text>
      </Link>
    </nav>
  );
};
