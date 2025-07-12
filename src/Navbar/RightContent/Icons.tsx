import { Flex, Icon, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const Icons: React.FC = () => {
  const [filter, setFilter] = useState('All');
  return (
    <Flex>
      <Menu>
        <MenuButton as={Flex} alignItems="center" cursor="pointer" p={2} borderRadius={4} _hover={{ bg: 'gray.200' }}>
          <Icon as={HamburgerIcon} fontSize={24} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setFilter('All')}>All</MenuItem>
          <MenuItem onClick={() => setFilter('Most Recent')}>Most Recent</MenuItem>
          <MenuItem onClick={() => setFilter('Most Upvoted')}>Most Upvoted</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default Icons;
