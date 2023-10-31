import { cookies } from 'next/headers';
import { fetchData } from '../../../utils/fetch-name';
import { contentfulClient } from '../../../env/contentful/contentful.client';
import { ButtonTitleEntryId } from '../../../env/contentful/contentful.constants';
import { FormActionPre } from './constants';
import { SeverFunction2 } from '../../../actions';

export default async function Solution2() {
  const title = await contentfulClient.getEntry(ButtonTitleEntryId);
  const data = await fetchData();
  const color = cookies().get('x-color')?.value ?? 'blue';
  return (
    <>
      <form>
        <input type="hidden" value={color} name="color" />
        <button
          title={title.fields.ctaLabel as string}
          formAction={SeverFunction2}
          className={`bg-${color}-500`}
        >
          with RS form action - {data}
        </button>
      </form>
      <pre>{FormActionPre}</pre>
    </>
  );
}
