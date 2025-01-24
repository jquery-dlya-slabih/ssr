import { NavLink, useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { getRecipe } from '@/api.ts';

function Recipe() {
  const { id } = useParams();

  if (!id) {
    const navigate = useNavigate();
    navigate(-1);

    return;
  }

  const { data, isLoading } = useQuery<IRecipe>({ queryKey: ['recipe/' + id], queryFn: () => getRecipe(id) });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{`Recipe of ${data?.name}`}</title>
      <meta name="description" content={'How to cook' + data?.name} />
      <h1>{data?.name}</h1>
      <div>
        <NavLink to="/">To main page</NavLink>
      </div>
      <div>
        <NavLink to="/recipes">To all recipes</NavLink>
      </div>
      <img src={data?.image} alt={data?.name} />
    </>
  );
}

export default Recipe;
