import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

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
        padding: '0 1vmin',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="App icon"
        width={70}
        height={70}
      />

      <Text color="white" css={{ margin: 'none' }} h2>
        P
      </Text>
      <Text color="white" css={{ margin: 'none' }} h3>
        okemón
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favorites</Text>
    </nav>
  );
};
