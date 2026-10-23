---
layout: ../layouts/PrivacyLayout.astro
title: Privacy Policy — HiddenTabby
description: How HiddenTabby handles browser workspace information.
effectiveDate: October 22, 2026
lede: >-
  HiddenTabby organizes browser tabs into workspaces. To show and restore those workspaces, it handles a small amount of information from regular (non-incognito) browser windows.
---

## Information HiddenTabby uses

HiddenTabby handles web browsing activity in the form of tab URLs and page titles; workspace names, colors, order, tab membership, and open or saved status; and browser tab, window, and session identifiers needed to reconnect and restore tabs.

HiddenTabby does not read page contents, form entries, or cookies. Pinned tabs and incognito windows are excluded. URLs can contain information present in the address itself, such as search terms or query parameters.

## Storage and use

This data is used only to display and manage workspaces and to restore their tabs when you switch groups. HiddenTabby uses Chrome extension APIs for these features:

- `tabs` reads tab IDs, URLs, titles, and window membership to display workspaces and move or restore tabs when switching.
- `tabGroups` creates and updates Chrome tab groups to represent workspaces and organize their tabs.
- `sessions` checks recently closed sessions and restores tabs with Chrome's Sessions API when switching workspaces, when a matching saved session is available.
- `contextMenus` adds a tab context-menu command so you can move the selected tab to a workspace.
- `storage` stores workspace names, colors, tab URLs and titles, tab membership, and restore state in `chrome.storage.local` in the current browser profile. This local data lets workspaces persist across browser restarts.

HiddenTabby does not send workspace records to the developer or to analytics, advertising, or other third-party services. It does not use the data for analytics, advertising, or profiling, and the developer does not access or review it. When you restore a tab, Chrome makes a normal browser request to the saved URL, and that website receives the request as it would during any normal navigation. HiddenTabby does not load or execute remotely hosted code; its executable scripts are included in the extension package.

You can remove tabs or workspaces in the manager. Deleting a workspace closes its open tabs and removes its HiddenTabby records. The browser manages its own history and recently closed session records separately; deleting a workspace does not erase browser history.

## Chrome Web Store Limited Use

HiddenTabby uses information accessed through Chrome extension APIs only to provide its tab-workspace features. Its use of user data complies with the Chrome Web Store User Data Policy, including the Limited Use requirements. HiddenTabby does not sell or otherwise disclose workspace records to third parties, use them for personalized, retargeted, or interest-based advertising, or allow people to read them. When you restore a tab, Chrome makes a normal browser request to the saved URL, and that website receives the request as it would during any normal navigation.

## Contact

For privacy questions, contact [privacy@hiddentabby.com](mailto:privacy@hiddentabby.com).
