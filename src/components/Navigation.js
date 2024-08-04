import React from 'react';
import { HeaderMenu, HeaderMenuItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import navigationConfig from '../configs/navigation';

function NavigationItem({ item }) {
  var path = item.route ? item.route.name : undefined;

  if (item.children) {
    return (
      <HeaderMenu aria-label={item.text} menuLinkName={item.text}>
        {item.children.map((e, k) => (
          <NavigationItem item={e} />
        ))}
      </HeaderMenu>
    );
  }

  return (
    <HeaderMenuItem as={Link} to={path}>
      {item.text}
    </HeaderMenuItem>
  );
}

export default function Navigation() {
  const items = navigationConfig.navigation;
  return (
    <>
      {items.map(e => (
        <NavigationItem item={e} />
      ))}
    </>
  );
}
