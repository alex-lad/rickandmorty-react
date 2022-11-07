import React, {useEffect} from 'react';
import axios from 'axios';
import './Heroes.scss';
import Pagination from '../pagination/Pagination';
import { IPagination, IResponse, IHero } from '../interfaces/Common';

const RESOURCE_URL = 'https://rickandmortyapi.com/api/character';
const DEFAULT_PAGE = 1;

const DEFAULT_PAGINATION: IPagination = {
  count: 1,
  next: '',
  pages: 1,
  prev: '',
};

const DEFAULT_LIST: IHero[] = [];

function Heroes(): JSX.Element {
  const [pagination, setPagination]: [IPagination, (pagination: IPagination) => void] = React.useState(DEFAULT_PAGINATION);
  const [page, setPage]: [number, (page: number) => void] = React.useState(DEFAULT_PAGE);
  const [heroes, setHeroes]: [IHero[], (heroes: IHero[]) => void] = React.useState(DEFAULT_LIST);

  const prevPage = async (): Promise<void> => {
    if (page > 1) {
      setPage(page - 1);
      await fetchData();
    }
  }

  const nextPage = async (): Promise<void> => {
    if (page < pagination.pages) {
      setPage(page + 1);
      await fetchData();
    }
  }

  const fetchData = async (): Promise<void> => {
    const params = {
      page,
    }

    await axios
      .get<IResponse>(RESOURCE_URL, { params })
      .then(res => {
        setPagination(res.data.info);
        setHeroes(res.data.results);
      });
  }

  useEffect(() => {
    fetchData();
  }, [page])

  return (
    <>
      <section className='heroes-wrapper'>
        {
          heroes.map(item => {
            return (
              <article key={item.id}>
                <a href={`hero/${item.id}`} style={{backgroundImage: `url(${item.image})`}}>
                  <span>{item.name}</span>
                </a>
              </article>
            )
          })
        }
      </section>
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </>
  )
}

export default Heroes;