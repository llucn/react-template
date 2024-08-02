import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const ApplicationHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Developer Center">
        <SkipToContent />
        <HeaderMenuButton
          aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />
        <HeaderName as={Link} to="/" prefix="">
          Developer Center
        </HeaderName>
        <HeaderNavigation aria-label="Developer Center">
          <>
            <HeaderMenuItem as={Link} to="#">
              Link 1
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="#">
              Link 2
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="#">
              Link 3
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="/">
              Home
            </HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem as={Link} to="#">
                Sub-link 1
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} isActive to="#">
                Sub-link 2
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="#">
                Sub-link 3
              </HeaderMenuItem>
            </HeaderMenu>
          </>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
          onSideNavBlur={onClickSideNavExpand}>
          <SideNavItems>
            <HeaderSideNavItems>
              <>
                <HeaderMenuItem as={Link} to="#">
                  Link 1
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} to="#">
                  Link 2
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} to="#">
                  Link 3
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} to="/">
                  Home
                </HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem as={Link} to="#">
                    Sub-link 1
                  </HeaderMenuItem>
                  <HeaderMenuItem as={Link} isActive to="#">
                    Sub-link 2
                  </HeaderMenuItem>
                  <HeaderMenuItem as={Link} to="#">
                    Sub-link 3
                  </HeaderMenuItem>
                </HeaderMenu>
              </>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default ApplicationHeader;
