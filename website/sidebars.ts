import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'wiki/index',
      label: 'Wiki',
    },
  ],
  skillsSidebar: [
    {
      type: 'doc',
      id: 'skills/index',
      label: 'Skills',
    },
  ],
  agentsSidebar: [
    {
      type: 'doc',
      id: 'agents/index',
      label: 'Agents',
    },
  ],
};

export default sidebars;
