import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'this',
    slug: 'lorem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'is',
    slug: 'dolor-sit-amet',
    content:
      'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  },
  {
    title: 'dummy',
    slug: 'consectetur-adipiscing',
    content:
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  },
  {
    title: 'data',
    slug: 'integer-nec-odio',
    content:
      'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.',
  },
  {
    title: ':)',
    slug: 'praesent-libero',
    content:
      'Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.',
  },
];

export async function GET() {
  return NextResponse.json(posts);
}