import { cookies } from 'next/headers';
import { SignInFunction } from '../../../actions';
import { fetchData } from '../../../utils/fetch-name';
import { ServerActionPre } from './constants';
import { contentfulClient } from '../../../env/contentful/contentful.client';

export default async function Solution3Page() {
  const title = await contentfulClient.getEntry('63Up9Hp3cYnkr7zaXEcKMd');
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (
    <>
      <form action={SignInFunction}>
        <input type="hidden" value={color} name="color" />
        <button
          title={title.fields.ctaLabel as string}
          type="submit"
          className={`p-2 rounded-md bg-${color}-500 text-white`}
        >
          with RS action - {data}
        </button>
      </form>
      <pre className="text-left mx-auto w-1/2 mt-3">{ServerActionPre}</pre>
    </>
  );
}
